define(['iframeResizerParent'], (iframeResize) => {
  describe('Parent Page', () => {
    xdescribe('default resize', () => {
      let iframe
      const log = LOG
      const testId = 'defaultResize3'
      let ready

      beforeEach((done) => {
        loadIFrame('iframe600.html')
        iframe = iframeResize({
          log,
          id: testId,
          onResized: () => {
            ready = true
            done()
          },
        })[0]

        mockMsgFromIFrame(iframe, 'foo')
      })

      afterEach(() => {
        tearDown(iframe)
      })

      it('receive message', () => {
        expect(ready).toBe(true)
      })
    })

    xdescribe('reset Page', () => {
      let iframe
      const log = LOG
      const testId = 'parentPage1'

      beforeEach((done) => {
        loadIFrame('iframe600.html')
        iframe = iframeResize({
          log,
          id: testId,
        })[0]

        spyOn(iframe.contentWindow, 'postMessage').and.callFake(done)
        mockMsgFromIFrame(iframe, 'reset')
      })

      afterEach(() => {
        tearDown(iframe)
      })

      it('receive message', () => {
        expect(iframe.contentWindow.postMessage).toHaveBeenCalledWith(
          '[iFrameSizer]reset',
          'http://localhost:9876',
        )
      })
    })

    xdescribe('late load msg received', () => {
      let iframe
      const log = LOG
      const testId = 'parentPage2'

      beforeEach((done) => {
        loadIFrame('iframe600.html')
        iframe = iframeResize({
          log,
          id: testId,
        })[0]

        spyOn(iframe.contentWindow, 'postMessage').and.callFake(done)
        window.postMessage('[iFrameResizerChild]Ready', '*')
      })

      afterEach(() => {
        tearDown(iframe)
      })

      it('receive message', () => {
        expect(iframe.contentWindow.postMessage).toHaveBeenCalledWith(
          '[iFrameSizer]parentPage2:8:false:true:32:true:true:null:bodyOffset:null:null:0:false:parent:scroll:true',
          'http://localhost:9876',
        )
      })
    })

    describe('resize height', () => {
      let iframe
      const log = LOG
      const testId = 'parentPage3'
      const HEIGHT = 90
      const extraHeights = [1, 2, 3, 4]

      const setUp = (boxSizing, units) => {
        loadIFrame('iframe.html')

        iframe = iframeResize({
          log,
          id: testId,
        })[0]

        iframe.style.boxSizing = boxSizing
        iframe.style.paddingTop = extraHeights[0] + units
        iframe.style.paddingBottom = extraHeights[1] + units
        iframe.style.borderTop = `${extraHeights[2]}${units} solid`
        iframe.style.borderBottom = `${extraHeights[3]}${units} solid`

        spyPostMsg = spyOn(iframe.contentWindow, 'postMessage')

        // needs timeout so postMessage always comes after 'ready' postMessage
        setTimeout(() => {
          window.postMessage(
            `[iFrameSizer]${testId}:${HEIGHT}:600:mutationObserver`,
            '*',
          )
        }, 0)
      }

      afterEach(() => {
        tearDown(iframe)
      })

      it('includes padding and borders from "px" units in height when CSS "box-sizing" is set to "border-box"', (done) => {
        setUp('border-box', 'px')

        // timeout needed because of requestAnimationFrame and must be more than window.postMessage in setUp
        setTimeout(() => {
          expect(iframe.offsetHeight).toBe(
            HEIGHT + extraHeights.reduce((a, b) => a + b, 0),
          )
          done()
        }, 100)
      })

      it('includes padding and borders from "rem" units in height when CSS "box-sizing" is set to "border-box"', (done) => {
        const REM = 14

        // changes the rem units of the doc so we can test accurately
        document.querySelector('html').style.fontSize = `${REM}px`

        setUp('border-box', 'rem')

        // timeout needed because of requestAnimationFrame and must be more than window.postMessage in setUp
        setTimeout(() => {
          expect(iframe.offsetHeight).toBe(
            HEIGHT + extraHeights.reduce((a, b) => a + b * REM, 0),
          )
          done()
        }, 100)
      })

      it('includes padding and borders from "px" units in height when CSS "box-sizing" is set to "content-box"', (done) => {
        setUp('content-box', 'px')

        // timeout needed because of requestAnimationFrame and must be more than window.postMessage in setUp
        setTimeout(() => {
          expect(iframe.offsetHeight).toBe(
            HEIGHT + extraHeights.reduce((a, b) => a + b, 0),
          )
          done()
        }, 100)
      })
    })
  })
})
