let API = function (server) {
  let api = {
    'listBlogCardPage': `${server.server}/index/listBlogCardPage`,
    'blogDetail': `${server.server}/blog/blogDetail/`,
    'searchBlogs': `${server.server}/index/searchBlogs`,
    'lastPublishBlogs': `${server.server}/index/lastPublishBlogs`,
    'popularPublishBlogs': `${server.server}/index/popularPublishBlogs`,
    'blogDiscussantPage': `${server.server}/blog/blogDiscussantPageList`,
    'saveBlogDiscussant': `${server.server}/blog/saveBlogDiscussant`,
    'testServer8': `${server.server}/login/goLoginTest`,
    'testServer9': `${server.server}/login/goLoginTest`
  }
  return api
}

export default { API }
