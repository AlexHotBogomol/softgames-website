class Helper {
  formatDate = (date) => {
    const newDate = new Date(Date.parse(date));
    return `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate
      .getFullYear()
      .toString()
      .slice(2, 4)}`;
  };
  deleteEmptyPTags = (string) => {
    return string.replace(/\<p\>&nbsp\;\<\/p\>/gi, "");
  }
}

export default Helper