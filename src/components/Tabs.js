import LeadsList from './LeadsList';

const Tabs = ({leadsList=[]}) => {
  return <div>
    <div class="tabs is-toggle is-fullwidth" id="tabs">
      <ul>
        <li class="is-active" data-tab="1">
          <a>
            <span ></span>
            <span>1</span>
          </a>
        </li>
        <li data-tab="2">
          <a>
            <span class=""></span>
            <span>2</span>
          </a>
        </li>
        <li data-tab="3">
          <a>
            <span class=""></span>
            <span>3</span>
          </a>
        </li>
        <li data-tab="4">
          <a>
            <span class=""></span>
            <span>4</span>
          </a>
        </li>
      </ul>
    </div>
    <div id="tab-content">
      <LeadsList class="is-active" data-content="1" leadsList={ leadsList.slice(0, 1) } />
      <LeadsList data-content="2" leadsList={ leadsList.slice(1, 2) } />
      <LeadsList data-content="3" leadsList={ leadsList.slice(2, 3) } />
      <LeadsList data-content="4" leadsList={ leadsList.slice(3, 4) } />
    </div>
  </div>
}

document.addEventListener('DOMContentLoaded', () => {

  const TABS = [...document.querySelectorAll('#tabs li')];
  const CONTENT = [...document.querySelectorAll('#tab-content p')];
  const ACTIVE_CLASS = 'is-active';

  function initTabs() {
      TABS.forEach((tab) => {
        tab.addEventListener('click', (e) => {
          let selected = tab.getAttribute('data-tab');
          updateActiveTab(tab);
          updateActiveContent(selected);
        })
      })
  }

  function updateActiveTab(selected) {
    TABS.forEach((tab) => {
      if (tab && tab.classList.contains(ACTIVE_CLASS)) {
        tab.classList.remove(ACTIVE_CLASS);
      }
    });
    selected.classList.add(ACTIVE_CLASS);
  }

  function updateActiveContent(selected) {
    CONTENT.forEach((item) => {
      if (item && item.classList.contains(ACTIVE_CLASS)) {
        item.classList.remove(ACTIVE_CLASS);
      }
      let data = item.getAttribute('data-content');
      if (data === selected) {
        item.classList.add(ACTIVE_CLASS);
      }
    });
  }
  initTabs();
});


export default Tabs