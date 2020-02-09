describe('App.ClickCounter', ()=> {
  let counter
  const data = { value: 0 }

  it('초기값을 주입하지 않으면 에러를 던진다', () => {
    const actual = () => (counter = App.ClickCounter())
    expect(actual).toThrowError()
  })

  beforeEach(()=> (counter = App.ClickCounter(data)))

  describe('getValue()', ()=> {
    it('초기값이 0인 카운터 값을 반환한다', ()=> {
      expect(counter.getValue()).toBe(0)
    })
  })

  describe('count()', ()=> {
    it('카운터를 1 올린다', ()=> {
      const initialValue = counter.getValue()
      counter.count()
      expect(counter.getValue()).toBe(initialValue + 1)
    })
  })

  describe('setCountFn()', () => {
    it('인자로 함수를 넘기면 count()를 대체한다', () => {
      const add2 = value => value + 2
      const expected = add2(data.value)
      /*
      setCountFc() 직후에 count() 함수를 체이닝 해준 것을 눈여겨 볼 필요가 있다.
      실제 구현 할 때도 이렇게 체이닝 할 수 있게 해주면 코드를 사용 할 수 있는 측면에서도 간단하게 코딩 할 수 있다.
      */
      counter.setCountFn(add2).count()

      const actual = counter.getValue()
      expect(actual).toBe(expected);
    })
  })
})