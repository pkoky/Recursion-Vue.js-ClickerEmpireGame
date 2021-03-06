const config = {
    itemsArr : ["FlipMachine","ETFStock","ETFBonds","LemonadeStand","IceCreamTruck","House","TownHouse","Mansion","IndustrialSpace","HotelSkyscraper","BulletSpeedSkyRailway"]
}

const images = {
    "FlipMachine" : "https://cdn.pixabay.com/photo/2019/06/30/20/09/grill-4308709_960_720.png",
    "ETFStock" : "https://cdn.pixabay.com/photo/2016/03/31/20/51/chart-1296049_960_720.png",
    "ETFBonds" : "https://cdn.pixabay.com/photo/2016/03/31/20/51/chart-1296049_960_720.png",
    "LemonadeStand" : "https://cdn.pixabay.com/photo/2012/04/15/20/36/juice-35236_960_720.png",
    "IceCreamTruck": "https://cdn.pixabay.com/photo/2020/01/30/12/37/ice-cream-4805333_960_720.png",
    "House": "https://cdn.pixabay.com/photo/2016/03/31/18/42/home-1294564_960_720.png",
    "TownHouse": "https://cdn.pixabay.com/photo/2019/06/15/22/30/modern-house-4276598_960_720.png",
    "Mansion": "https://cdn.pixabay.com/photo/2017/10/30/20/52/condominium-2903520_960_720.png",
    "IndustrialSpace": "https://cdn.pixabay.com/photo/2012/05/07/17/35/factory-48781_960_720.png",
    "HotelSkyscraper": "https://cdn.pixabay.com/photo/2012/05/07/18/03/skyscrapers-48853_960_720.png",
    "BulletSpeedSkyRailway": "https://cdn.pixabay.com/photo/2013/07/13/10/21/train-157027_960_720.png"
}

class Item {
    constructor(name, type, imageUrl, price, totalPrice, effect, count, maxCount) {
        this.name = name;
        this.type = type;
        this.imageUrl = imageUrl;
        this.price = price;
        this.totalPrice = totalPrice;
        this.effect = effect;
        this.count = count;
        this.maxCount = maxCount;
    }
}

class User {
    constructor(name, age, days, money, burger) {
        this.name = name;
        this.age = age;
        this.days = days;
        this.money = money;
        this.burger = burger;
        this.purchasedItems = Controller.createItemsArr();
    }
}


class Controller {
    
    static createItemsArr () {
        const itemObjArray = [
            new Item("Flip Machine", "ability", images["FlipMachine"], 15000, 0, 25, 1, 500),
            new Item("ETF Stock", "investment", images["ETFStock"], 330000, 0, 0.1, 0, "???"),
            new Item("ETF Bonds", "investment", images["ETFBonds"], 300000, 0, 0.07, 0, "???"),
            new Item("Lemonade Stand", "realEstate", images["LemonadeStand"], 30000, 0, 30, 0, 1000),
            new Item("IceCream Truck", "realEstate", images["IceCreamTruck"], 100000, 0, 120, 0, 500),
            new Item("House", "realEstate", images["House"], 20000000, 0, 32000, 0, 100),
            new Item("TownHouse", "realEstate", images["TownHouse"], 40000000, 0, 64000, 0, 100),
            new Item("Mansion", "realEstate", images["Mansion"], 250000000, 0, 500000, 0, 20),
            new Item("Industrial Space", "realEstate", images["IndustrialSpace"], 1000000000, 0, 2200000, 0, 10),
            new Item("Hotel Skyscraper", "realEstate", images["HotelSkyscraper"], 10000000000, 0, 250000000, 0, 5),
            new Item("Bullet-Speed SkyRailway", "realEstate", images["BulletSpeedSkyRailway"], 10000000000000, 0, 30000000000, 0, 1),
        ]
        return itemObjArray;
    }
    
    static calculateEffect(item) {
        return item.effect * item.count;
    }
    
    static calculateEffectOfETF(item) {
        let totalAmount = item.price * item.count;
        return Math.floor((totalAmount/100) * item.effect);
    }
    
    static createUser(name) {
        return new User(name, 20, 0, 50000, 0)
    }

    static determineAdditionType(item, purchaseAmount) {
        let possibleValues = item.maxCount - item.count;
        if (item.maxCount === "???") return "ETF";
        if (item.count < item.maxCount && purchaseAmount <= possibleValues) {
            return "addition";
        } else if (item.count === item.maxCount) {
            return "alreadyMaxCount";
        } else {
            return "";
        }
    }
    
    static displayNone(id) {
        let page = document.getElementById(id)
        page.classList.add("d-none");
    }
    
    static haveEnoughMoney(totalAmount, money) {
        if (totalAmount <= money) return true;
        else return false;
    }

    static getLoginData(userName) {
        let jsonDecoded = JSON.parse(localStorage.getItem(userName));
        return jsonDecoded;
    }

    static getNumOfSecond() {
        let num = window.prompt("????????????????????????????????????\n???????????????0??????????????????????????????????????????");
        if (num != null && num > 0) return num;
        return 0;
    }
    
    static quantityAvailablePurchase(price, remainingQuantity, money) {
        let quantityForMoney = Math.floor(money / price);
        
        if (quantityForMoney == 0) return 0;
        else if (quantityForMoney <= remainingQuantity || remainingQuantity <= 0 || isNaN(remainingQuantity)) return quantityForMoney;
        else return remainingQuantity;
    }

    static saveData(user) {
        let jsonEncoded = JSON.stringify(user);
        localStorage.setItem(user.name, jsonEncoded);
        alert('?????????????????????');
    }
    
    static switchWrapperVh() {
        let wrapper = document.getElementById("wrapper");
        if (wrapper.classList.contains("vh-100")) {
            wrapper.classList.remove("vh-100");
        }
        else {
            wrapper.classList.add("vh-100")
        }
    }
}


var itemInfo = {
    props:['item'],
    template: '#itemInfoPage',
    data: function() {
        return {
            purchaseAmount: 1,
        }
    },
    methods: {
        pushPurchaseBtn() {
            this.additionToCount();
        },
    }
}


var mainPage = {
    props:['user', 'numofsecond'],
    data: function () {
      return {
        isShowItemInfo: false,
        itemsArr: this.user.purchasedItems,
        showItemInfo: false,
        currItem: '',
      }
    },
    template: '#mainPage',
    methods: {
        addDaysAndAge()  {
            this.user.days++;
            if (this.user.days == 365) {
                this.user.age++;
                this.user.days = 0;
            }
        },

        addCountAndMoney(purchaseAmount, totalAmount) {
            this.currItem.count += Number(purchaseAmount);
            this.withdrawMoney(totalAmount);
            this.switchShowItemInfo();
        },

        additionToCount(purchaseAmount) {
            let totalAmount = this.currItem.price * purchaseAmount;
            let additionType = Controller.determineAdditionType(this.currItem, purchaseAmount);
            let haveEnoughMoney = Controller.haveEnoughMoney(totalAmount, this.user.money);
            
            if (haveEnoughMoney && (additionType === "addition" || additionType === "ETF")){
                this.addCountAndMoney(purchaseAmount, totalAmount)
                if (additionType === "ETF") this.currItem.price = Math.floor(this.currItem.price * 1.1);
            }

            else if (additionType === "alreadyMaxCount") this.switchShowItemInfo();
            else return false;

            return true;
        },
        
        addMoneyForItemsPerSecond() {
            let items = this.user.purchasedItems;
            for (let item of items) {
                if (item.type == 'investment') {
                    let effect = Controller.calculateEffectOfETF(item);
                    this.depositMoney(effect);
                }
                else if (item.type != "ability") {
                    let effect = Controller.calculateEffect(item);
                    this.depositMoney(effect);
                }
            }
        },
        
        clickBurger() {
            this.user.burger++;
            let effect = Controller.calculateEffect(this.user.purchasedItems[0]);
            this.depositMoney(effect);
        },

        depositMoney(moneyToDeposit) {
            this.user.money += moneyToDeposit;
        },

        
        getBurgerEffect() {
            return Controller.calculateEffect(this.user.purchasedItems[0]); 
        },
        
        pushPurchaseBtn(purchaseAmount) {
            if(!this.additionToCount(purchaseAmount)) {
                let remainingQuantity = this.currItem.maxCount - this.currItem.count;
                let quantityAvailablePurchase = Controller.quantityAvailablePurchase(this.currItem.price, remainingQuantity, this.user.money);
                
                if (quantityAvailablePurchase == 0) {
                    alert("You can't buy one.\nPlease make money.");
                } else {
                    alert("This quantity is not available for purchase. \nPlease change the value to " + quantityAvailablePurchase + " or less.")
                }
            }
        },
        
        pushResetBtn() {
            let result = window.confirm('???????????????????????????\n????????????????????????????????????????????????????????????????????????')
            if (!result) return;
            if (this.user.name in localStorage) {
                localStorage.removeItem(this.user.name);
            }
            this.$emit('reset-data', this.user.name);
            alert('???????????????????????????????????????');
        },
        
        pushSaveBtn() {
            if (window.confirm('?????????????????????')) Controller.saveData(this.user);
            else return;
        },
        
        showItemInfoPage(currItem) {
            this.switchShowItemInfo()
            this.currItem = currItem;
        },

        switchShowItemInfo() {
            this.showItemInfo = !this.showItemInfo;
        },

        timerControl() {
            this.addDaysAndAge();
            this.addMoneyForItemsPerSecond();
        },

        withdrawMoney(moneyToWithdraw) {
            this.user.money -= moneyToWithdraw;
        },
    },

    created: function() {
        let num = this.numofsecond > 0 ? 1000 / this.numofsecond : 1000;
        setInterval(this.timerControl, num);
    },

    components: {
        'item-info': itemInfo,
    }
}


var vm = new Vue({
    el: '#wrapper',
    data: {
        showMainPage: false,
        userName: '',
        userObj: '',
        numOfSecond: 0,
    },
    methods: {
        startGame() {
            this.userObj = Controller.createUser(this.userName);
            this.switchPage();
        },

        pushBtn(btnType) {
            if (this.userName === "Trick") {  // ????????????
                this.trick();
                return;
            }

            if (this.userName == '') {
                alert('????????????????????????????????????');
                return;
            };

            if (btnType === 'new') this.newBtn();
            if (btnType === 'login') this.loginBtn();
        },

        loginBtn() {
            if (this.userName in localStorage) {
                this.loginGame();
            } else {
                alert('??????????????????????????????\n?????????????????????????????????');
            }
        },

        newBtn() {
            if (this.userName in localStorage) {
                if (window.confirm('???????????????????????????????????????????????????????????????')) {
                    this.loginGame();
                } else {
                    alert('????????????????????????')
                    this.startGame();
                }
            }
            else this.startGame();
        },

        loginGame() {
            this.userObj = Controller.getLoginData(this.userName);
            this.switchPage();
        },

        resetData(userName) {
            this.userObj = Controller.createUser(userName)
        },

        trick() {
            this.numOfSecond = Controller.getNumOfSecond();
            if (this.numOfSecond == 0) {
                alert('?????????????????????????????????????????????')
            } else {
                alert(this.numOfSecond + "?????????????????????????????????")
            }
            this.userName = '';
        },

        switchPage() {
            Controller.switchWrapperVh()
            this.showMainPage = !this.showMainPage;
        }
    },
    components: {
        'main-page' : mainPage,
    }
})