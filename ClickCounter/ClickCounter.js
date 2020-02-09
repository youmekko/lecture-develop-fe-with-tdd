var App = App || {}

App.ClickCounter = _data => {
  if(!_data) throw Error('_data')

  const data = _data;

  /*
  데이터를 공유하기 위해서는 기존처럼 정수 같은 원시형을 사용 할 수 없다.
  생성 인자로 넘겨주면 그 값은 복사되기 떄문이다.
  그러므로 레퍼런스로 받는 객체를 사용해야 한다.
  */

  data.value = data.value || 0

  return {
    getValue() {
      return data.value
    },

    increase() {
      data.value++
    }
  }
}