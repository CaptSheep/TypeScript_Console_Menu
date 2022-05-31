"use strict";
exports.__esModule = true;
exports.CityManager = void 0;
var CityManager = /** @class */ (function () {
    function CityManager() {
        this.cities = [];
    }
    CityManager.prototype.addCity = function (city) {
        var check = false;
        this.cities.forEach(function (item) {
            if (city.id === item.id) {
                check = true;
            }
        });
        if (check) {
            throw new Error("Can not Create City");
        }
        else {
            this.cities.push(city);
        }
    };
    CityManager.prototype.findCity = function (id) {
        var i = -1;
        this.cities.forEach(function (cities, index) {
            if (cities.id === id) {
                i = index;
            }
        });
        return i;
    };
    CityManager.prototype.updateCity = function (city) {
        var cityId = this.findCity(city.id);
        {
            if (cityId !== -1) {
                this.cities[cityId].setName(city.name);
            }
            else {
                throw new Error('Can not Update City');
            }
        }
    };
    CityManager.prototype.deleteCity = function (id) {
        var cityId = this.findCity(id);
        {
            if (cityId !== -1) {
                this.cities.splice(cityId, 1);
            }
            else {
                throw new Error("Can not Delete City");
            }
        }
    };
    CityManager.prototype.detailCity = function (id) {
        var result = this.cities.find(function (obj) { return obj.id == id; });
        return result;
    };
    return CityManager;
}());
exports.CityManager = CityManager;
