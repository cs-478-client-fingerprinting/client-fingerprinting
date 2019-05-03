package controllers

import (
	"net/http"

	u "fingerprinting/utils"
)

var Test = func(w http.ResponseWriter, r *http.Request) {
	resp := map[string]interface{}{"Hello": "World"}
	u.Respond(w, resp)
}

// var PostFingerprint = func(w http.ResponseWriter, r *http.Request) {
// 	fingerprint := &models.Fingerprint{}
//
// 	err := json.NewDecoder(r.Body).Decode(fingerprint)
// 	if err != nil {
// 		u.Respond(w, u.Message(false, "Error while decoding request body"))
// 		return
// 	}
//
// 	resp := map[string]interface{}{"message": "Hello"}
// 	u.Respond(w, resp)
// }

// var GetFingerprint = func(w http.ResponseWriter, r *http.Request) {
//
// params := mux.Vars(r)
// id, err := strconv.Atoi(params["id"])
// if err != nil {
// 	//The passed path parameter is not an integer
// 	u.Respond(w, u.Message(false, "There was an error in your request"))
// 	return
// }
//
// data := models.getFingerprint(uint(id))
// resp := u.Message(true, "success")
// resp["data"] = data
// u.Respond(w, resp)
// }