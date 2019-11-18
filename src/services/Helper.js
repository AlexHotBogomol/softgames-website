class Helper {
  formatDate = (date) => {
    const newDate = new Date(Date.parse(date));
    return `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate
      .getFullYear()
      .toString()
      .slice(2, 4)}`;
  };
  deleteEmptyPTags = (string) => string.replace(/<p>&nbsp;<\/p>/gi, "");
  getFilteredPostsByTerm = (posts, term, value, defaultValue) => {
    return posts.filter(postItem => {
      if(value === defaultValue && !postItem[term]){
        return postItem
      }
      if(postItem[term] === value){
        return postItem
      }
    });
  };
}

export default Helper