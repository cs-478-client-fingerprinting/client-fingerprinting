package utils

import (
	"encoding/json"
	"fingerprinting/models"
	"io/ioutil"
	"net/http"
)

// SendMessage cruft...
func SendMessage(w http.ResponseWriter, message string) {
	data := map[string]interface{}{"message": message}
	Respond(w, data)
}

// SendError more cruft
func SendError(w http.ResponseWriter, message string) {
	data := map[string]interface{}{"message": message}
	w.WriteHeader(http.StatusNotFound)
	Respond(w, data)
}

// Respond sends json response
func Respond(w http.ResponseWriter, data map[string]interface{}) {
	w.Header().Add("Content-Type", "application/json")
	json.NewEncoder(w).Encode(data)
}

// ReadFingerprint reads fingerprint from body
func ReadFingerprint(w http.ResponseWriter, r *http.Request) *models.Fingerprint {
	// https://gist.github.com/aodin/9493190
	// Read body
	b, err := ioutil.ReadAll(r.Body)
	defer r.Body.Close()
	if err != nil {
		http.Error(w, err.Error(), 500)
	}

	print(b)

	// Unmarshal
	fingerprint := &models.Fingerprint{}
	err = json.Unmarshal(b, &fingerprint)

	print(fingerprint)

	if err != nil {
		http.Error(w, err.Error(), 500)
	}
	return fingerprint
}
