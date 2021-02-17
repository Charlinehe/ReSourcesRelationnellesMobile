import { config } from './config';

export const PUBLIC_RESOURCES = "http://" + config.IP_ADDRESS + ":" + config.PORT + "/api/resource/public";
export const RESOURCE_DETAIL = "http://" + config.IP_ADDRESS + ":" + config.PORT + "/api/resource/";
export const RESOURCE_VALUATION = "http://" + config.IP_ADDRESS + ":" + config.PORT + "/api/resource/valuation/";