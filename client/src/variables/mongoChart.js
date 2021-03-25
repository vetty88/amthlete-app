import "regenerator-runtime/runtime";
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";

const sdk = new ChartsEmbedSDK({
  baseUrl: "https://charts.mongodb.com/charts-project-0-ifizl" // Optional: ~REPLACE~ with the Base URL from your Embed Chart dialog
});

const chart = sdk.createChart({
  chartId: "bdab3054-5ba1-47e5-b482-45e5e859c862", // Optional: ~REPLACE~ with the Chart ID from your Embed Chart dialog
  height: "700px"
});

async function renderChart() {
  await chart.render(document.getElementById("chart"));

  /*
    chart.refresh()
    Manually fetches the latest data for the chart
   */
  document.getElementById("refresh").addEventListener("click", () => {
    chart.refresh();
  });

  /*
    chart.setRefreshInterval(interval: number)
    The default rate is to never refresh after rendering.
    The minimum rate is every 10 seconds.
    Setting to 0 returns the chart to the default setting.
    chart.getRefreshInterval()
    Returns a number pertaining to the charts current
    refresh interval.
   */
  document
    .getElementById("refresh-interval")
    .addEventListener("change", async e => {
      var refreshInterval = e.target.value;
      refreshInterval
        ? chart.setRefreshInterval(Number(refreshInterval))
        : chart.setRefreshInterval(0);

      var currentRefreshInterval = await chart.getRefreshInterval();
      document.getElementById(
        "currentRefreshInterval"
      ).innerText = currentRefreshInterval;
    });

  /*
    chart.setFilter(filter: object)
    Filters the chart with the given filter string.
    It's important to manually whitelist fields you want users
    to be able to filter on. Do this in the Embedded settings of 
    your chart. 
    chart.getFilter()
    Returns the current filter object. The key is the field,
    and the value the query.
   */
  document
    .getElementById("horse")
    .addEventListener("change", async e => {
      const horse = e.target.value;
      const currentFilterDOM = document.getElementById("currentFilter");
      if (horse) {
        await chart.setFilter({ "address.horse": horse }); // Optional: ~REPLACE~ with the your own whitelisted field
        const filter = await chart.getFilter();
        currentFilterDOM.innerText = JSON.stringify(filter);
      } else {
        await chart.setFilter({});
        const filter = await chart.getFilter();
        currentFilterDOM.innerText = JSON.stringify(filter);
      }
    });

  /*
    chart.setTheme(theme: 'dark' | 'light');
    When the chart is set to dark, it's background becomes transparent.
    It is important when activating this setting you set the background of 
    the body to an appropriate colour.
    chart.getTheme()
    The current state of the charts theme is maintained by the chart.
    Returns a string.
   */
  document
    .getElementById("themeSwitch")
    .addEventListener("change", async function() {
      if (this.checked) {
        await chart.setTheme("dark");
        document.body.classList.toggle("dark-mode", true);
      } else {
        await chart.setTheme("light");
        document.body.classList.toggle("dark-mode", false);
      }

      var currentTheme = await chart.getTheme();
      document.getElementById("currentTheme").innerText = currentTheme;
    });
}

renderChart().catch(e => window.alert(e.message));
// import API from "../../utils/API";

// const [competitions, setCompetitions] = useState([]) 

//   // Load all competitions and store them with setCompetitions
//   useEffect(() => {
//     loadCompetitions()
//   }, [])

//   // Loads all competitions and sets them to competitions
//   function loadCompetitions() {
//     API.getCompetitions()
//       .then(res => 
//         setCompetitions(res.data)
//       )
//       .catch(err => console.log(err));
//   };

//   console.log(competitions.length);