angular.module('formCard', []).directive('formCard', function () {
  return {
    restrict: 'E',
    scope: { // 부모측에서 보내줄 데이터들 =는 부모와 데이터 바인딩
      formCards: '=formCards',
      formString: '=formString'
    },
    templateUrl: '../views/directives/formcard.html',
    transclude: true,//태그로 사용시 html단에서 내용삽입 가능여부
    link: function postLink(scope, element, attrs, ctrl, transclude) {
      scope.formData = {};

      scope.setModel = function(item){
        if (scope.formData[item.name] === undefined){
          scope.formData[item.name] = {model:String()};
        }
        item.formData = scope.formData[item.name];
      };

      scope.Init = function() {
        var formCardsLen = scope.formCards.length;
        var rowLen = null;
        var colLen = null;
        for (var i =0; i<formCardsLen ; i++){
          rowLen = scope.formCards[i].length;
          for (var j= 0; j<rowLen; j++){
            colLen = scope.formCards[i][j].length;
            for(var k = 0; k<colLen; k++){
              var obj = scope.formCards[i][j][k];
              scope.setModel(obj);
            }
          }
        }
      };

      scope.radioClick = function (a, b) {
        a=b;

      };

      scope.submit = function(){
        scope.$parent.submit(scope.formData);
      };

      scope.Init();

    }
  };
});
