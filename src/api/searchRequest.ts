import { FormattedResult } from "../types/SearchResponce";
import { makeRequest } from "../utils/fetch";

export const searchRequest = (query: string): Promise<[FormattedResult]>  => makeRequest({url: `search?q=${query}`});