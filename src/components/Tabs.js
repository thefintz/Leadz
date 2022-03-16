import LeadsList from './LeadsList';

const Tabs = ({leadsList=[]}) => {
  return <div>
    <div class="tabs is-boxed is-centered">
      <ul>
        <li class="is-active" data-target="1">
          <a>1</a> 
        </li>
        <li data-target="2">
          <a>2</a>
        </li>
        <li data-target="3">
          <a>3</a>
        </li>
        <li data-target="4">
          <a>4</a>
        </li>
        <li data-target="5">
          <a>5</a>
        </li>
        <li data-target="6">
          <a>6</a>
        </li>
        <li data-target="7">
          <a>7</a>
        </li>
        <li data-target="8">
          <a>8</a>
        </li>
        <li data-target="9">
          <a>9</a>
        </li>
        <li data-target="10">
          <a>10</a>
        </li>
      </ul>
    </div>
    <div class="px-3" id="tab-content">
      <div id="1">
        <LeadsList leadsList={ leadsList.slice(0,10) } />
      </div>
      <div id="2" class="is-hidden">
        <LeadsList leadsList={ leadsList.slice(10,20) } />
      </div>
      <div id="3" class="is-hidden">
        <LeadsList leadsList={ leadsList.slice(20,30) } />
      </div>
      <div id="4" class="is-hidden">
        <LeadsList leadsList={ leadsList.slice(30,40) } />
      </div>
      <div id="5" class="is-hidden">
        <LeadsList leadsList={ leadsList.slice(40,50) } />
      </div>
      <div id="6" class="is-hidden">
        <LeadsList leadsList={ leadsList.slice(50,60) } />
      </div>
      <div id="7" class="is-hidden">
        <LeadsList leadsList={ leadsList.slice(60,70) } />
      </div>
      <div id="8" class="is-hidden">
        <LeadsList leadsList={ leadsList.slice(70,80) } />
      </div>
      <div id="9" class="is-hidden">
        <LeadsList leadsList={ leadsList.slice(80,90) } />
      </div>
      <div id="10" class="is-hidden">
        <LeadsList leadsList={ leadsList.slice(90,100) } />
      </div>
    </div>
  </div>
}

document.addEventListener('DOMContentLoaded', () => {

  const tabs = document.querySelectorAll('.tabs li');
  const tabContentBoxes = document.querySelectorAll('#tab-content > div');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(item => item.classList.remove('is-active'));
      tab.classList.add('is-active');
  
      const target = tab.dataset.target;
      // console.log(target);
      tabContentBoxes.forEach(box => {
        if (box.getAttribute('id') === target) {
          box.classList.remove('is-hidden');
        } else {
          box.classList.add('is-hidden');
        }
      })
    })
  })

});

export default Tabs