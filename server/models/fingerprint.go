package models

import (
	"github.com/jinzhu/gorm"
)

// Fingerprint Will need to be expanded
type Fingerprint struct {
	gorm.Model
	Name            string `json:"name"`
	IP              string `json:"ip"`
	OperatingSystem string `json:"operatingSystem"`
	Browser         uint   `json:"browser"`
}

// GetFingerprintFromSample Comment
func GetFingerprintFromSample(sample *Fingerprint, fingerprint *Fingerprint) {
	newFingerprint := &Fingerprint{}
	// err := GetDB().Table("fingerprints").Where("id = ?", id).First(fingerprint).Error

	fingerprint = newFingerprint
}
