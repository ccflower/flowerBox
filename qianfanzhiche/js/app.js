Bmob.initialize("09f1f5169a3bf9749498f02635167543", "cf97804e80a07eb70f8d1d0bd5039a67");
var app = angular.module('qianfanzhiche', []);
app.controller('qianfanzhicheController', function($scope) {
    var id;
    $scope.addData = function() {
      console.log("addData");
      var GameScore = Bmob.Object.extend("GameScore");
      var gameScore = new GameScore();
      gameScore.set("score", 1337);
      gameScore.save(null, {
        success: function(object) {
          id = object.id;
          console.log("create object success, object id:" + id);
        },
        error: function(model, error) {
          alert("create object fail");
        }
      });
    }
    
    $scope.getData = function() {
        console.log("getData");
        var GameScore = Bmob.Object.extend("CommunityItem");
        var query = new Bmob.Query(GameScore);
        query.find({
          success: function(results) {
            console.log("共查询到 " + results.length + " 条记录");
            // 循环处理查询到的数据
            for (var i = 0; i < results.length; i++) {
              var object = results[i];
              console.log(object.id);
              query.get(object.id, {
                  success: function(gameScore) {
                    // 查询成功，调用get方法获取对应属性的值
                    var image = gameScore.get("image");
                    console.log(image._url);
                  },
                  error: function(object, error) {
                    // 查询失败
                  }
                });
            }
          },
          error: function(error) {
            alert("查询失败: " + error.code + " " + error.message);
          }
        });
    }
});


function addData() {
    var GameScore = Bmob.Object.extend("GameScore");
    var gameScore = new GameScore();
    gameScore.set("score", 1337);
    gameScore.save(null, {
      success: function(object) {
        id = object.id;
        console.log("create object success, object id:" + id);
      },
      error: function(model, error) {
        alert("create object fail");
      }
    });
}
function getData() {
    var GameScore = Bmob.Object.extend("CommunityItem");
    var query = new Bmob.Query(GameScore);
    query.find({
      success: function(results) {
        console.log("共查询到 " + results.length + " 条记录");
        // 循环处理查询到的数据
        for (var i = 0; i < results.length; i++) {
          var object = results[i];
          console.log(object.id);
          query.get(object.id, {
              success: function(gameScore) {
                // 查询成功，调用get方法获取对应属性的值
                var image = gameScore.get("image");
                console.log(image._url);
              },
              error: function(object, error) {
                // 查询失败
              }
            });
        }
      },
      error: function(error) {
        alert("查询失败: " + error.code + " " + error.message);
      }
    });
}