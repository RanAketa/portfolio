// catalog
class ClsCatalogList extends React.Component {
  render(){
    var rows = [];
    catalogs.forEach((catalog) => {
      rows.push(
        <div className="android-auto android-screen" style={catalog.cssName}>
        <img className="android-screen-image" src={'images/'+ catalog.image +'.jpg'} />
        <p>sweet通販カタログ</p>
        </div>
      );
    });
    return (
      <div>
      {rows}
      </div>
    );
  }
}
// ecsite
class ClsEcsiteList extends React.Component {
  render(){
    var rows = [];
    ecsites.forEach((ecsite) => {
      var descSource = (ecsite.desc).split("\n").map(function(val, index) {
        return <p>{val}</p>;
      });
      if(typeof ecsite.anker !== "undefined") {
        var imgAnker = <a href={ecsite.anker} target="_blank"><img src={'images/'+ ecsite.image +'.png'} /></a>;
      } else {
        var imgAnker = <img src={'images/'+ ecsite.image +'.png'} />;
      }
      var logoSize = (ecsite.site == 'groupon') ? {width:'100px'} : {width:'70px'};
      rows.push(
        <div className="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet mdl-cell--8-col-phone mdl-card mdl-shadow--3dp">
          <div className="mdl-card__media" style={{border:'1px solid #eee', padding:'10px',margin:'10px'}}>
            {imgAnker}
          </div>
          <div className="mdl-card__title">
             <h4 className="mdl-card__title-text ranaketa-font" style={{'font-size':'100%'}}>{ecsite.title}</h4>
          </div>
          <div className="mdl-card__supporting-text" style={{'text-align':'left'}}>
            <div className="mdl-typography--font-light mdl-typography--subhead ranaketa-font ranaketa-ecsite-desc">{descSource}</div>
            <p className="mdl-typography--font-light mdl-typography--subhead ranaketa-font ranaketa-ecsite-point">{ecsite.point}</p>
          </div>
          <div className="mdl-card__actions"><img src={'images/'+ ecsite.site +'-logo.png'} style={logoSize} /></div>
        </div>
      );
    });
    return (
      <div className="android-card-container mdl-grid">
      {rows}
      </div>
    );
  }
}
// React DOM
ReactDOM.render(
  <ClsCatalogList catalogs={catalogs} />,
  document.getElementById('react-catalog-area')
);
ReactDOM.render(
  <ClsEcsiteList ecsites={ecsites} />,
  document.getElementById('react-ecsite-area')
);
