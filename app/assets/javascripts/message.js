$(function(){
  var buildHTML = function(message){
    if (message.image && message.content) {
      var html =
        `<div class="message" data-message-id=${message.id}>
          <div class="message__sent">
            <p class="message__sent__member">
              ${message.user_name}
            </p>
            <p class="message__sent__up-time">
              ${message.created_at}
            </p>
          </div>
          <p class="message__comment">
            ${message.content}
          </p>
          <img src=${message.image}>
        </div>`
    } else if(message.content){
      var html = 
        `<div class="message" data-message-id=${message.id}>
          <div class="message__sent">
            <p class="message__sent__member">
              ${message.user_name}
            </p>
            <p class="message__sent__up-time">
              ${message.created_at}
            </p>
          </div>
          <p class="message__comment">
            ${message.content}
          </p>
        </div>`
    }else if(message.image) {
      var html = 
        `<div class="message" data-message-id=${message.id}>
          <div class="message__sent">
            <p class="message__sent__member">
              ${message.user_name}
            </p>
            <p class="message__sent__up-time">
              ${message.created_at}
            </p>
          </div>
          <img src=${message.image}>
        </div>`
    }
    return html
  };

  $('.new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
    url: url,
    type: "POST",
    data: formData,
    dataType: 'json',
    processData: false,
    contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);      
      $('form')[0].reset();
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight});
    })
    .always(function(){
      $('.form__input__send').prop( 'disabled', false )
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
    })
  })
  
  var reloadMessages = function() {
    var last_message_id = $('.message:last').data("message-id");
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0) {
      //追加するHTMLの入れ物を作る
        var insertHTML = '';
      //配列messagesの中身一つ一つを取り出し、HTMLに変換したものを入れ物に足し合わせる
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
      //メッセージが入ったHTMLに、入れ物ごと追加
        $('.messages').append(insertHTML);
        $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      }
    })
    .fail(function() {
      alert('error');
    });
    
  };
  if (document.location.href.match(/\/groups\/\d+\/messages/)) {
    setInterval(reloadMessages, 7000);
  }
});
