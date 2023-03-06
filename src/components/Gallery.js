function Profile(props) {
    return (
      <ul>
        <li>{props.nameGp.name}</li>
        <li>{props.nameGp.age}</li>
        <li>{props.nameGp.education}</li>
      </ul>
    );
  }
  
  export default function Gallery() {
    const nameGp = {
      name: 'test',
      age:20,
      education: 30,
    }
    return (
      <section>
        <h1>Amazing scientists</h1>
        {/* <Profile name="titleOne"/>
        <Profile name="titleTwo"/>
        <Profile name="TiteThree"/> */}
        <Profile nameGp={nameGp}/>
      </section>
    );
  }
  