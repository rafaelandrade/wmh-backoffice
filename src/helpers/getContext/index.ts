import httpContext from 'express-http-context'

const getContext = (key: string): any => {
  return httpContext.get('requestId')
}

export { getContext }
