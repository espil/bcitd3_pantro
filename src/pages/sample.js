function App(onSelect, nextStep) {
    //backend functions
    const [allmeds, setAll] = useState([]);
    const [meds, setMeds] = useState([]);
    const [cond, setCond] = useState(null);
    const [open, setOpen] = useState(false);
  
    const sortEarliest = () => {
      setMeds(allmeds.sort(sortByTime));
    };
  
    const sortLatest = () => {
      setMeds(allmeds.sort(sortByTimeReverse));
    };
  
    const handleSelect = (cond) => {
      setCond(cond);
      console.log(cond);
    };
  
    const handleOpen = () => {
      setOpen((state) => !state);
    };
  
    const setMedsWithFilteredData = (cond) => {
      // let result = "";
      setMeds(
        meds.filter((o) => {
          console.log(cond);
          return o.cond.includes(cond);
        })
      );
    };
  
    const getData = async () => {
      var resp = await axios.get(
        "https://medtrack-midterm.herokuapp.com/api/meds"
      );
      setAll([...resp.data.meds]);
      setMeds([...resp.data.meds]);
      console.log(resp.data.meds)
    };
  
    useEffect(() => {
      getData();
    }, []);
  
    const HandleClick = (id) => {
      // setIds(id)
      onSelect(id);
      nextStep();
    };
    //end of backend functions
  
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/add-med">
              <AddMed />
            </Route>
            <Route exact path="/list-med">
              <ListMed />
            </Route>
            <Route exact path="/">
              <div className="page">
                <BannerTime />
                <Filter
                  text1="Alzheimer’s"
                  text2="Angina"
                  text3="Arthritis"
                  text4="Asthma"
                  reMove="false"
                  changeIcon2="false"
                  onSelect={handleSelect}
                  onClick={handleOpen}
                />
                {open && (
                  <div className="bigButton">
                    <ButtonBig
                      onClick={() => {
                        setMedsWithFilteredData(cond);
                      }}
                    />
                  </div>
                )}
                <div className="home_buttons">
                  <Button height="45px" width="200px" text="Earliest" onClick={sortEarliest} />
                  <Button height="45px" width="200px" text="Latest" onClick={sortLatest} />
                </div>
                <Title />
                {meds.map((o, i) => (
                  <Link to={"/med/" + o.id} style={{ textDecoration: "none" }}>
                    <MedInfoBox
                      key={i}
                      medName={o.name}
                      dos={o.dos}
                      unit={o.unit}
                      amount={o.amt}
                      time={o.time}
                      onClick={HandleClick.bind(this, o.id)}
                    />
                  </Link>
                ))}
                <Link to="/add-med">
                  <Button margin="10px 0px" text="+ Add Med" />
                </Link>
                <Link to="/list-med">
                  <Button
                    margin="10px 0px"
                    text="See All Meds"
                    bgcolor={"#63AAC8"}
                  />
                </Link>
              </div>
            </Route>
            <Route exact path="/med/:id">
              <Med />
            </Route>
            <Route exact path="/edit/:id">
              <Edit />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
  
  export default App;
  
  //App functions - SORT
  
  // by time (i.e. 11:00 - use 24h clock)
  function sortByTime(a, b) {
    return parseInt(a.time) - parseInt(b.time);
  }
  function sortByTimeReverse(a, b) {
    return parseInt(b.time) - parseInt(a.time);
  }