$(()=>{

  const $mnu = $('header>nav>.gnb>li>a');

  const arrTopVal = [];
  let nowIdx;

  for(let i=0;i<3;i++){;
    arrTopVal[i] = $('article').eq(i).offset().top;
  };
  

  const moveFn = function(idx){
    $('html,body').stop().animate({scrollTop:arrTopVal[idx]-69});
  };

  //메뉴
  $mnu.on('click',(evt)=>{
    evt.preventDefault();

    const nowIdx = $mnu.index(evt.currentTarget);

    moveFn(nowIdx-1);

  })

  // 슬라이드
  const $container = $('section>.port>.visual>.slides');
  const $thumb = $('section>.port>.container>.thumb>ul>li>a');
  const $btnPrev = $('section>.port>.container>.pagination>.prev');
  const $btnNext = $('section>.port>.container>.pagination>.next');
  const $linkText = $('section>.port>.visual>.link>ul>li');

  const contMoveFn = ()=>{

    $thumb.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
    $container.stop().animate({left:-900*nowIdx});
    $linkText.eq(nowIdx).stop().show().siblings().hide();

  };

  $thumb.on('click',(evt)=>{
    evt.preventDefault();

    nowIdx = $thumb.index(evt.currentTarget);

    contMoveFn();

  });

  $btnPrev.on('click',(evt)=>{
    evt.preventDefault();

    if(nowIdx>0){
      nowIdx--;
    }else{
      nowIdx=1;
    }

    contMoveFn();
  });

  $btnNext.on('click',(evt)=>{
    evt.preventDefault();

    if(nowIdx<1){
      nowIdx++;
    }else{
      nowIdx=0;
    }
    
    contMoveFn();
  });



  // 윈도우 스크롤
  $(window).on('scroll',()=>{

    const scrollTop = $(window).scrollTop();

    for(let i=0;i<3;i++){

      if(scrollTop>=arrTopVal[i]-200){
        $mnu.eq(i+1).parent().addClass('on').siblings().removeClass('on');
      }
    }

    if($(window).scrollTop()===0){
      $mnu.parent().removeClass('on');
    }
    
    $('.logo>a').trigger('click');
  });
  
});