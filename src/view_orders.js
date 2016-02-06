/**
 *
 * Created 24.10.2015<br />
 * &copy; http://www.oknosoft.ru 2014-2015
 * @author  Evgeniy Malyarov
 * @module  view_orders
 */

$p.iface.view_orders = function (cell) {

	function OViewOrders(){

		var t = this;

		function show_list(){

			var _cell = t.carousel.cells("list"),
				def_prm = {
					hide_header: true,
					date_from: new Date("2012-01-01")
				},
				tabs = [
					{id: "orders", text: '<i class="fa fa-suitcase"></i> Заказы', active: true},
					{id: "pays", text: '<i class="fa fa-money"></i> Оплаты'},
					{id: "shipments", text: '<i class="fa fa-shopping-bag"></i> Продажи'},
					{id: "balance", text: '<i class="fa fa-balance-scale"></i> Баланс'}
				];

			if(t.carousel.getActiveCell() != _cell)
				_cell.setActive();

			if(!t.tabs){

				_cell.detachObject(true);
				t.tabs = _cell.attachTabbar({
					arrows_mode:    "auto",
					tabs: tabs
				});

				t._orders = $p.doc.ЗаказКлиента.form_list(t.tabs.cells("orders"), def_prm);
				t._pays = $p.doc.ПриходныйКассовыйОрдер.form_list(t.tabs.cells("pays"), def_prm);
				t._shipments = $p.doc.РеализацияТоваровУслуг.form_list(t.tabs.cells("shipments"), def_prm);
				t._balance = t.tabs.cells("balance").attachHTMLString($p.injected_data['view_balance.html']);

				// TODO: заплата, исправляющая заголовки
				setTimeout(function () {
					tabs.forEach(function (tab) {
						t.tabs.cells(tab.id).setText(tab.text);
					})
				});

			}

		}

		function show_doc(ref){

			var _cell = t.carousel.cells("doc");

			if(t.carousel.getActiveCell() != _cell)
				_cell.setActive();

			if(!_cell.ref || _cell.ref != ref)
				$p.doc.ЗаказКлиента.form_obj(_cell, {
						ref: ref,
						bind_pwnd: true,
						on_close: function () {
							setTimeout(function () {
								$p.iface.set_hash(undefined, "", "list");
							});
						}
					})
					.then(function (wnd) {
						t.doc = wnd;
					});
		}


		function hash_route(hprm) {

			if(hprm.view == "orders"){

				if($p.eve.logged_in){

					if(hprm.obj == "doc.ЗаказКлиента" && !$p.is_empty_guid(hprm.ref)){

						if(hprm.frm != "doc")
							setTimeout(function () {
								$p.iface.set_hash(undefined, undefined, "doc");
							});
						else
							show_doc(hprm.ref);


					} else if($p.is_empty_guid(hprm.ref) || hprm.frm == "list"){

						if(hprm.obj != "doc.ЗаказКлиента")
							setTimeout(function () {
								$p.iface.set_hash("doc.ЗаказКлиента");
							});
						else
							show_list();
					}
				}

				return false;
			}

		}

		function on_log_in(){

			// имитируем переход
			var hprm = $p.job_prm.parse_url(),
				obj = hprm.obj || "doc.ЗаказКлиента";

			setTimeout(function () {
				$p.iface.set_hash(obj);
			});
		}

		// Рисуем дополнительные элементы навигации
		t.tb_nav = new $p.iface.OTooolBar({
			wrapper: cell.cell.querySelector(".dhx_cell_sidebar_hdr"),
			class_name: 'md_otbnav',
			width: '220px', height: '28px', top: '3px', right: '3px', name: 'right',
			buttons: [
				{name: 'about', text: '<i class="fa fa-info-circle md-fa-lg"></i>', title: 'О&nbsp;программе', float: 'right'},
				{name: 'settings', text: '<i class="fa fa-cog md-fa-lg"></i>', title: 'Настройки', float: 'right'},
				{name: 'events', text: '<i class="fa fa-calendar-check-o md-fa-lg"></i>', title: 'Планирование', float: 'right'},
				{name: 'orders', text: '<i class="fa fa-suitcase md-fa-lg"></i>', title: 'Документы', float: 'right'},
				{name: 'clients', text: '<i class="fa fa-user md-fa-lg"></i>', title: 'Клиенты', float: 'right'}

			], onclick: function (name) {
				$p.iface.main.cells(name).setActive(true);
				return false;
			}
		});

		// страницы карусели
		t.carousel = cell.attachCarousel({
			keys:           false,
			touch_scroll:   false,
			offset_left:    0,
			offset_top:     4,
			offset_item:    0
		});
		t.carousel.hideControls();
		t.carousel.addCell("list");
		t.carousel.addCell("doc");


		// Рисуем стандартную форму аутентификации. К ней уже привязан алгоритм входа по умолчанию
		// При необходимости, можно реализовать клиентские сертификаты, двухфакторную авторизацию с одноразовыми sms и т.д.
		if($p.eve.logged_in)
			setTimeout(on_log_in);
		else
			$p.iface.frm_auth({	cell: t.carousel.cells("list") }, null, $p.record_log );


		/**
		 * Обработчик маршрутизации
		 * @param hprm
		 * @return {boolean}
		 */
		$p.eve.hash_route.push(hash_route);


		// слушаем событие online-offline


		// слушаем событие авторизации и входа в систему
		$p.eve.attachEvent("log_in", on_log_in);

	}

	if(!$p.iface._orders)
		$p.iface._orders = new OViewOrders();

	return $p.iface._orders;

};
