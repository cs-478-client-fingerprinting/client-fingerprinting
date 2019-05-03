package models

import (
	"github.com/jinzhu/gorm"
)

type Fingerprint struct {
	gorm.Model
	IP              string `json:"ip"`
	OperatingSystem string `json:"operatingSystem"`
	Browser         uint   `json:"browser"`
}
