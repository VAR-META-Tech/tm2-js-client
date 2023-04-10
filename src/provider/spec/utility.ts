import { RPCError, RPCRequest, RPCResponse } from './jsonrpc';

// The version of the supported JSON-RPC protocol
const standardVersion = '2.0';

/**
 * Creates a new JSON-RPC 2.0 request
 * @param {string} method the requested method
 * @param {string[]} [params] the requested params, if any
 * @returns {RPCRequest} the created request object
 */
export function newRequest(method: string, params?: string[]): RPCRequest {
  return {
    // the ID of the request is not that relevant for this helper method;
    // for finer ID control, instantiate the request object directly
    id: Date.now(),
    jsonrpc: standardVersion,
    method: method,
    params: params,
  };
}

/**
 * Creates a new JSON-RPC 2.0 response
 * @param {Result} result the response result, if any
 * @param {RPCError} error the response error, if any
 * @returns {RPCResponse<Result>} the created response object
 */
export function newResponse<Result>(
  result?: Result,
  error?: RPCError
): RPCResponse<Result> {
  return {
    id: Date.now(),
    jsonrpc: standardVersion,
    result: result,
    error: error,
  };
}
