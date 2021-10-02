document.addEventListener('DOMContentLoaded', function (e) {
  let activeEditorTab;
  let activeEditorIndex;
  try {
    activeEditorTab = window.localStorage.getItem('activeEditorTab');
  } catch (ev) {
    activeEditorTab = 'HTML';
    window.localStorage.setItem('activeEditorTab', activeEditorTab);
  }
  try {
    activeEditorIndex = window.localStorage.getItem('activeEditorIndex');
  } catch (ev) {
    activeEditorIndex = 0;
    window.localStorage.setItem('activeEditorIndex', activeEditorIndex);
  }
  openEditor(e, activeEditorTab);
});

function openEditor(evt, tabname) {
  var i;
  var tabcontents;
  var tablinks;
  var selectedindex = 0;
  /**
   * set tab
   */
  tablinks = document.getElementsByClassName('tablink');
  for (i = 0; i < tablinks.length; i++) {
    let tabel = tablinks.item(i);
    let innerhtml = tabel.innerHTML;
    if (innerhtml === tabname) {
      window.localStorage.setItem('activeEditorIndex', i);
      window.localStorage.setItem('activeEditorTab', tabname);
      console.log('selectedindex set to: ' + selectedindex);
      tabel.classList.add('active');
    } else {
      tabel.classList.remove('active');
    }
  }
  /**
   * set editor
   */
  tabcontents = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontents.length; i++) {
    console.log('tabcontents[i] ', tabcontents[i]);
    console.log('i ' + i);
    let el = tabcontents.item(i);
    let currid = `${tabname}-editor-frame--wrapper`;
    console.log('currid = ', currid);
    if (el.id === currid) {
      el.classList.remove('axr-hidden');
    } else {
      el.classList.add('axr-hidden');
    }
  }

  /**
   * Display 'tabname' content
   */
  let elem = tabcontents.item(selectedindex);
  elem.classList.remove('axr-hidden');
  /**
   * Set active tab
   */
  tablinks[selectedindex].classList.add('active');
}
