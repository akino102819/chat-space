$(function(){
  function buildHTML(message){
    if (message.image) {
      var html = //メッセージに画像が含まれる場合のHTMLを作る
        `<div class="message">
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
        return html;
    } else {
      var html = //メッセージに画像が含まれない場合のHTMLを作る
        `<div class="message">
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
        return html
    };
  }
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
    }
    .fail(function() {
      alert("メッセージ送信に失敗しました");
  });
  })
});
