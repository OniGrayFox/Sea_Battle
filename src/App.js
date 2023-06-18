import "./styles.css";




	let startGame = false;
	// флаг установки обработчиков событий ручного размещения кораблей и
	// редактирование их положения
	let isHandlerPlacement = false;
	// флаг установки обработчиков событий ведения морского боя
	let isHandlerController = false;
	// флаг, блокирующий действия игрока во время выстрела компьютера
	let compShot = false;

	// получаем объект элемента DOM по его ID
	const getElement = id => document.getElementById(id);
	// вычисляем координаты всех сторон элемента относительно окна браузера
	// с учётом прокрутки страницы
	const getCoordinates = el => {
		const coords = el.getBoundingClientRect();
		return {
			left: coords.left + window.pageXOffset,
			right: coords.right + window.pageXOffset,
			top: coords.top + window.pageYOffset,
			bottom: coords.bottom + window.pageYOffset
		};
	};

	// игровое поле игрока
	const humanfield = getElement('field_human');
	// игровое поле компьютера
	const computerfield = getElement('field_computer');

	class Field {
		// размер стороны игрового поля в px
		static FIELD_SIDE = 330;
		// размер палубы корабля в px
		static SHIP_SIDE = 33;
		// объект с данными кораблей
		// ключём будет являться тип корабля, а значением - массив,
		// первый элемент которого указывает кол-во кораблей данного типа,
		// второй элемент указывает кол-во палуб у корабля данного типа
		static SHIP_DATA = {
			fourdeck: [1, 4],
			tripledeck: [2, 3],
			doubledeck: [3, 2],
			singledeck: [4, 1]
		};

		constructor(field) {
			// объект игрового поля, полученный в качестве аргумента
			this.field = field;
			// создаём пустой объект, куда будем заносить данные по каждому созданному кораблю
			// эскадры, подробно эти данные рассмотрим при создании объектов кораблей
			this.squadron = {};
			// двумерный массив, в который заносятся координаты кораблей, а в ходе морского
			// боя, координаты попаданий, промахов и заведомо пустых клеток
			this.matrix = [];
			// получаем координаты всех четырёх сторон рамки игрового поля относительно начала
			// document, с учётом возможной прокрутки по вертикали 
			let { left, right, top, bottom } = getCoordinates(this.field);
			this.fieldLeft = left;
			this.fieldRight = right;
			this.fieldTop = top;
			this.fieldBottom = bottom;
		}

		static createMatrix
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
