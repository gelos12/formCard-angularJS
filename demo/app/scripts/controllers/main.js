'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the demoApp
 */
app.controller('MainCtrl', function ($scope) {
  var vm = this;
  vm.formCards = []; // 카드 갯수

  function initFormItems() {
    //카드는 여러개의 로우로 구성되고
    //로우는 여러개의 컬럼으로 구성된다.



    var row1 = []; //  로우
    var row2 = [];
    var singleText = [];      // 싱글 텍스트
    var multiText = [];       // 멀티 텍스트
    var singleCheck = [];     // 싱글 체크박스
    var multiCheck = [];      // 멀티 체크박스
    var singleRadio = [];     // 싱글 라디오
    var multiRadio = [];      // 멀티 라디오
    var singleDate = [];      // 싱글 데이트
    var multiDate = [];       // 멀티 데이트

    // * name, type, title, model
    // placehoder

    singleText.push({name: "singText", type: "text", title: "single Text",});

    multiText.push({name: "multiText1", type: "text", title: "multi Text1",});
    multiText.push({name: "multiText2", type: "text", title: "multi Text2",});

    singleCheck.push({name: "singCheck", type: "checkbox", title: "single Check",});

    multiCheck.push({name: "multiCheck1", type: "checkbox", title: "multi Check1",});
    multiCheck.push({name: "multiCheck2", type: "checkbox", title: "multi Check2",});

    singleRadio.push({name: "singRadio", type: "radio", title: "single radio",});

    multiRadio.push({name: "multiRadio", type: "radio", title: "multi radio1", value: "1"});
    multiRadio.push({name: "multiRadio", type: "radio", title: "multi radio2", value: "2"});
    multiRadio.push({name: "multiRadio", type: "radio", title: "multi radio3", value: "3"});

    singleDate.push({name: "singDate", type: "Date", title: "single Date",});

    multiDate.push({name: "multiDate1", type: "Date", title: "multi Date",});
    multiDate.push({name: "multiDate2", type: "Date", title: "multi Date",});

    vm.formCards.push(row1);

    row1.push(singleText);
    row1.push(multiText);
    row1.push(singleCheck);
    row1.push(multiCheck);
    row1.push(singleRadio);
    row1.push(multiRadio);
    row1.push(singleDate);
    row1.push(multiDate);
  }

  vm.formItems = []; // 폼 갯수
  initFormItems();

  $scope.submit = function (formData) {
    console.log(formData);
  };

});
