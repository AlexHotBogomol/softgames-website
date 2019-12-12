import React from 'react'
import Error from 'next/error';
import Err404 from "../components/Err404/Err404";

const Page = ({ errorCode, stars }) => {
  if (errorCode === 404){
    return <Err404/>
  }
  else if (errorCode) {
    return <Error statusCode={errorCode} />
  }

  return <div>No error</div>
};

Page.getInitialProps = async ({req, res}) => {
  const errorCode = res.statusCode > 200 ? res.statusCode : false;

  /*
    Handling ?= should be solved differently if you use dynamic routing,
    this will only remove the 404 for those urls.
  */
  let urlParts = req.url.split('?');
  if (urlParts[0].endsWith('/')) {
    urlParts[0] = urlParts[0].substring(0, urlParts[0].length - 1)
    res.writeHead(301, { Location: urlParts.join('?') })
    res.end()
  }

  return { errorCode }
};

export default Page