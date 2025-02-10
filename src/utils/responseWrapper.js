import {BASE_URL} from "@/utils/constants.js";
import {addError, getToken, isAuthorized} from "@/utils/errors.js";

export async function sendPostRequest(urlPath, body, params) {
    const headers = {
        "Content-Type": "application/json",
    }
    if (isAuthorized()) {
        headers["Authorization"] = "Bearer " + getToken();
    }
    console.log(headers);

    const trimmedBody = body instanceof Object ? JSON.stringify(body) : body;

    let finalUrl = BASE_URL + urlPath;

    if (params) {
        let stringedParams = toQueryString(params);
        finalUrl += stringedParams;
    }

    const response = await fetch(finalUrl, {
        method: "POST",
        headers: headers,
        body: trimmedBody,
    });

    const json = await response.json();

    if (json?.errorMessage !== undefined) {
        let error = json.errorMessage;
        if (json?.errors) {
            error += ": " + JSON.stringify(json.errors);
        }

        addError(error);
        return null;
    }

    return json;


}

function toQueryString(params) {
    return "?" + Object.entries(params)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');
}
