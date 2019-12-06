const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");

const PUBLIC_KEY = "1c96085a14d938307edc82d3cb531bd8";
const PRIVATE_KEY = "a7d242a2be3a57faccd38e03365f8305";

const mailjet = require("node-mailjet").connect(PUBLIC_KEY, PRIVATE_KEY);

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.post("/api/contact", (req, res) => {
    const {
      firstName,
      lastName,
      email,
      website,
      telephone,
      category,
      message,
      agreement
    } = req.body;
    const request = mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: "zakablukov777@gmail.com",
            Name: `Softgames`
          },
          To: [
            {
              Email: "zakablukov777@gmail.com",
              Name: "Sasha"
            }
          ],
          Subject: "Softgames - Contact Form",
          HTMLPart: `
          <h1>Hello</h1>
          <ul>
            <li>firstName: ${firstName}</li>
            <li>lastName: ${lastName}</li>
            <li>email: ${email}</li>
            <li>website: ${website ? website : ""}</li>
            <li>telephone: ${telephone}</li>
            <li>category: ${category ? category : ""}</li>
            <li>message: ${message}</li>
            <li>agreement: ${agreement}</li>          
          </ul>
          `,
          CustomID: "ContactForm"
        }
      ]
    });
    request
      .then(result => {
        console.log(result.body);
        res.send('send');
      })
      .catch(err => {
        console.log(err.statusCode);
      });
  });

  server.listen(3000, err => {
    if (err) throw err;
    console.log("> Read on http://localhost:3000");
  });
});
