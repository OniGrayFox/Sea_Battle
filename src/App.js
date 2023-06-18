import "./styles.css";

export default function App() {
  return (
    <div>
      <div class="wrap">
        <div class="battlefield">
          <div id="text_top" class="flex text-top">
            Расстановка кораблей
          </div>
          <div class="flex outer">
            <div class="field field-human">
              <div id="field_human" class="ships"></div>
            </div>

            <div class="field field-computer" hidden>
              <div id="field_computer" class="ships"></div>
            </div>

            <div id="instruction" class="instruction">
              <div id="type_placement" class="type-placement-box">
                1.{" "}
                <span class="link" data-target="random">
                  Случайным образом
                </span>
                2.{" "}
                <span class="link" data-target="manually">
                  Методом перетаскивания.
                </span>
              </div>
              <div id="ships_collection" class="ships-collection" hidden>
                <p>
                  Перетащите мышкой корабли на игровое поле. Для установки
                  корабля по вертикали, кликните по нему правой кнопкой мышки.
                </p>
              </div>
            </div>
          </div>
          <div class="service-row">
            <div id="service_text" class="service-text"></div>
            <button id="play" type="button" class="btn-play" hidden>
              Играть
            </button>

            <button
              id="newgame"
              type="button"
              class="btn-play btn-newgame"
              hidden
            >
              Продолжить
            </button>
          </div>
        </div>

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
      </div>
    </div>
  );
}
