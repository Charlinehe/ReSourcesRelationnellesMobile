import { config } from './config';

// API
export const PUBLIC_RESOURCES = "http://" + config.IP_ADDRESS + ":" + config.PORT + "/api/resource/public";
export const RESOURCE_DETAIL = "http://" + config.IP_ADDRESS + ":" + config.PORT + "/api/resource/";
export const RESOURCE_VALUATION = "http://" + config.IP_ADDRESS + ":" + config.PORT + "/api/resource/valuation/";
export const RESOURCE_COMMENT = "http://" + config.IP_ADDRESS + ":" + config.PORT + "/api/comment/";
export const COMMENT_ANSWER = "http://" + config.IP_ADDRESS + ":" + config.PORT + "/api/comment/answer/";
export const USER_LOGIN = "http://" + config.IP_ADDRESS + ":" + config.PORT + "/api/user/login";

// Social
export const FACEBOOK = "https://www.facebook.com/Sante.Gouv/";
export const TWITTER = "https://twitter.com/Sante_Gouv";


// Contact
export const MAIL = "contact@resourcesrelationnelles.fr";
