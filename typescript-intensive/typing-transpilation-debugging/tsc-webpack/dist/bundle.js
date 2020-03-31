System.register("iperson", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("abstract-human", [], function (exports_2, context_2) {
    "use strict";
    var Human;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
            Human = class Human {
                constructor(name) {
                    this.name = name;
                }
            };
            exports_2("default", Human);
        }
    };
});
System.register("ihero", [], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("person", ["abstract-human"], function (exports_4, context_4) {
    "use strict";
    var abstract_human_1, Person;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [
            function (abstract_human_1_1) {
                abstract_human_1 = abstract_human_1_1;
            }
        ],
        execute: function () {
            Person = class Person extends abstract_human_1.default {
                constructor(name) {
                    super(name);
                }
                showAge() {
                    return this.age;
                }
            };
            exports_4("default", Person);
        }
    };
});
System.register("hero", ["person"], function (exports_5, context_5) {
    "use strict";
    var person_1, Hero;
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [
            function (person_1_1) {
                person_1 = person_1_1;
            }
        ],
        execute: function () {
            Hero = class Hero extends person_1.default {
                constructor(name) {
                    super(name);
                    this.superpowers = [];
                }
                addPower(power) {
                    this.superpowers.push(power);
                }
                listPowers() {
                    return this.superpowers;
                }
            };
            exports_5("default", Hero);
        }
    };
});
System.register("app", ["hero"], function (exports_6, context_6) {
    "use strict";
    var hero_1, batman;
    var __moduleName = context_6 && context_6.id;
    return {
        setters: [
            function (hero_1_1) {
                hero_1 = hero_1_1;
            }
        ],
        execute: function () {
            batman = new hero_1.default('batman');
            batman.age = 33;
            batman.addPower("money");
            // /* tslint:disable:no-console */
            console.log(batman.listPowers());
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vaXBlcnNvbi50cyIsIi4uL2Fic3RyYWN0LWh1bWFuLnRzIiwiLi4vaWhlcm8udHMiLCIuLi9wZXJzb24udHMiLCIuLi9oZXJvLnRzIiwiLi4vYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztRQUlBLENBQUM7Ozs7Ozs7Ozs7WUNIRCxRQUFBLE1BQStCLEtBQUs7Z0JBR2hDLFlBQVksSUFBWTtvQkFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLENBQUM7YUFFSixDQUFBOztRQUNELENBQUM7Ozs7Ozs7OztRQ0xELENBQUM7Ozs7Ozs7Ozs7Ozs7O1lDSEQsU0FBQSxNQUFxQixNQUFPLFNBQVEsd0JBQUs7Z0JBQ3JDLFlBQVksSUFBWTtvQkFDcEIsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNoQixDQUFDO2dCQUNELE9BQU87b0JBQ0gsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUNwQixDQUFDO2FBQ0osQ0FBQTs7UUFBQSxDQUFDOzs7Ozs7Ozs7Ozs7OztZQ0xGLE9BQUEsTUFBcUIsSUFBSyxTQUFRLGdCQUFNO2dCQUVwQyxZQUFZLElBQVk7b0JBQ3BCLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtvQkFGZixnQkFBVyxHQUFhLEVBQUUsQ0FBQztnQkFHM0IsQ0FBQztnQkFDRCxRQUFRLENBQUMsS0FBYTtvQkFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7Z0JBQ2hDLENBQUM7Z0JBQ0QsVUFBVTtvQkFDTixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQzVCLENBQUM7YUFDSixDQUFBOztRQUFBLENBQUM7Ozs7Ozs7Ozs7Ozs7O1lDWEksTUFBTSxHQUFHLElBQUksY0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1lBQ2hCLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDekIsa0NBQWtDO1lBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDakMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGludGVyZmFjZSBJUGVyc29uIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGFnZTogbnVtYmVyO1xyXG59XHJcbiIsImltcG9ydCBJUGVyc29uIGZyb20gJy4vaXBlcnNvbidcclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgIEh1bWFuIGltcGxlbWVudHMgSVBlcnNvbiAge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgYWdlOiBudW1iZXI7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgfVxyXG4gICAgYWJzdHJhY3Qgc2hvd0FnZSgpOiBudW1iZXI7XHJcbn1cclxuIiwiaW1wb3J0IElQZXJzb24gZnJvbSAnLi9pcGVyc29uJztcclxuZXhwb3J0IGRlZmF1bHQgaW50ZXJmYWNlIElIZXJvIGV4dGVuZHMgSVBlcnNvbiB7XHJcbiAgICBzdXBlcnBvd2Vyczogc3RyaW5nW11cclxufVxyXG4iLCJpbXBvcnQgSHVtYW4gZnJvbSAnLi9hYnN0cmFjdC1odW1hbidcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVyc29uIGV4dGVuZHMgSHVtYW4ge1xyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSk7XHJcbiAgICB9XHJcbiAgICBzaG93QWdlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWdlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IElIZXJvIGZyb20gJy4vaWhlcm8nO1xyXG5pbXBvcnQgUGVyc29uIGZyb20gJy4vcGVyc29uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlcm8gZXh0ZW5kcyBQZXJzb24gaW1wbGVtZW50cyBJSGVybyB7XHJcbiAgICBzdXBlcnBvd2Vyczogc3RyaW5nW10gPSBbXTtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKG5hbWUpXHJcbiAgICB9XHJcbiAgICBhZGRQb3dlcihwb3dlcjogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdXBlcnBvd2Vycy5wdXNoKHBvd2VyKVxyXG4gICAgfVxyXG4gICAgbGlzdFBvd2VycygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3VwZXJwb3dlcnM7XHJcbiAgICB9XHJcbn0iLCIvLyAvKiB0c2xpbnQ6ZGlzYWJsZSAqLyAtLT4gbm90IGFkdmlzYWJsZVxyXG5pbXBvcnQgSGVybyBmcm9tICcuL2hlcm8nO1xyXG5cclxuY29uc3QgYmF0bWFuID0gbmV3IEhlcm8oJ2JhdG1hbicpO1xyXG5iYXRtYW4uYWdlID0gMzM7XHJcbmJhdG1hbi5hZGRQb3dlcihcIm1vbmV5XCIpO1xyXG4vLyAvKiB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlICovXHJcbmNvbnNvbGUubG9nKGJhdG1hbi5saXN0UG93ZXJzKCkpO1xyXG4iXX0=