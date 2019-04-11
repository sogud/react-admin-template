export default {
  pagination(data, callback) {
    return {
      onChange: current => {
        callback(current)
      },
      current: data.result.page,
      pageSize: data.result.page_size,
      total: data.result.total_count,
      showTotal: () => {
        return `共${data.result.total_count}条`
      },
      showQuickJumper: true
    }
  }
}
