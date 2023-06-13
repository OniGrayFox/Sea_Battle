import "./styles.css";

export default function App() {
  return (
    <ul class="initial-ships">
      <li>
        <div id="fourdeck1" class="ship fourdeck"></div>
        <div id="tripledeck1" class="ship tripledeck tripledeck1"></div>
        <div id="tripledeck2" class="ship tripledeck tripledeck2"></div>
      </li>
      <li>
        <div id="doubledeck1" class="ship doubledeck"></div>
        <div id="doubledeck2" class="ship doubledeck doubledeck2"></div>
        <div id="doubledeck3" class="ship doubledeck doubledeck3"></div>
      </li>
      <li>
        <div id="singledeck1" class="ship singledeck"></div>
        <div id="singledeck2" class="ship singledeck singledeck2"></div>
        <div id="singledeck3" class="ship singledeck singledeck3"></div>
        <div id="singledeck4" class="ship singledeck singledeck4"></div>
      </li>
    </ul>
  );
}
