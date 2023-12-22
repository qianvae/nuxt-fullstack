class Response {
  static fail(err = {}, msg = '操作失败', status = 400) {
    return {
      msg,
      err,
      status,
    }
  }

  static success(ctx, data, msg = 'success', status = 200) {
    ctx.response.status = status
    ctx.response.body = data
    ctx.response.message = msg
  }
}

module.exports = Response
