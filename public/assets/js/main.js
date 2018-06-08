(function ($) {

    skel.breakpoints({
        xlarge: '(max-width: 1680px)',
        large: '(max-width: 1280px)',
        medium: '(max-width: 980px)',
        small: '(max-width: 736px)',
        xsmall: '(max-width: 480px)',
        xxsmall: '(max-width: 360px)'
    });

    $(function () {

        var $window = $(window),
            $body = $('body'),
            $wrapper = $('#wrapper'),
            $header = $('#header'),
            $footer = $('#footer'),
            $main = $('#main'),
            $main_articles = $main.children('article'),
            $work = $('#work'),
            $works = $('.work'),
            $p = $('p'),
            $section = $main.children('section'),
            delay = 325,
            locked = false;


        // Close section.
        function closeWorks() {
            $('.big').removeClass("big");
            $(".work-image-class").addClass("works-img");
            $p.hide();
            $(".product", $works).hide();
            $(".work-image-class").show();
            $('.small').removeClass("small");
            $('.fade').removeClass("fade");
            $('.close-work').remove();
        }

        // Add product.
        function addProduct(clickedWork) {
            $(".product", clickedWork).show();
        }

        // New order.
        $(function commande(categorie, description, date, prix, name) {
            var requeteEnCours = false;

            // New cart.
            function getCart() {
                var cart = localStorage.getItem("cart");

                try {
                    cart = JSON.parse(cart);
                }
                catch (e) {
                }
                return cart || [];
            }

            // Add to cart.
            function addToCart(item) {
                if (!item.category || !item.desc || !item.price) {
                    console.log("Item invalide", item);
                    return;
                }

                var cart = getCart();
                cart.push(item);
                localStorage.setItem("cart", JSON.stringify(cart));
            }

            // Remove from cart.
            function removeFromCart(index) {
                var index = index || 0;
                var cart = getCart();
                if (!cart[index]) {
                    console.log("Item introuvable", index);
                    return;
                }

                cart.splice(index, 1);
                localStorage.setItem("cart", JSON.stringify(cart));
            }

            // Price.
            function getPrixTotal() {
                var prixTotal = '';

                var cart = getCart();

                for (var i = 0; i < cart.length; i++) {
                    prixTotal = Number(prixTotal) + Number(cart[i].price);
                }

                return prixTotal;
            }

            // Clear cart.
            function clearCart() {
                var cart = [];
                localStorage.setItem("cart", JSON.stringify(cart));
            }

            // Refresh cart
            function refreshTable() {
                var cart = getCart();

                $('.tableau').empty();

                if (cart.length == 0) {
                    $('<tr class="0"><td class="com-0-cat"></td><td class="com-0-des"></td><td class="com-0-dat number"></td><td class="com-0-pri number"></td><td class="suppr-0"></td></tr>')
                        .appendTo('.tableau');
                    $('.com-0-des').append("Aucune commande");
                }
                else {

                    for (var i = 0; i < cart.length; i++) {

                        var ligne = i;

                        $('<tr><td class=\"com-' + ligne + '-cat\"></td><td class=\"com-' + ligne + '-des\"></td><td class=\"com-' + ligne + '-dat number\"></td><td class=\"com-' + ligne + '-pri number\"></td><td class=\"suppr-' + ligne + '\"></td></tr>')
                            .appendTo('.tableau');


                        var croix = $('<p class="suppr" value=\"' + ligne + '\">X</p>');
                        croix.appendTo(".suppr-" + ligne);

                        croix.on("click", $(this), function () {
                            var ligneSuppr = $(this).attr('value');
                            removeFromCart(ligneSuppr);
                            refreshTable();
                        });

                        $('.com-' + ligne + '-cat')
                            .empty().append(cart[i].category);
                        $('.com-' + ligne + '-des')
                            .empty().append(cart[i].desc);
                        $('.com-' + ligne + '-dat')
                            .empty().append(cart[i].date);
                        $('.com-' + ligne + '-pri')
                            .empty().append(cart[i].price + ' €');
                    }

                }

                $('.prix-total').html(getPrixTotal() + ' €');
            }

            var selectItem = {},
                rang;

            // Add choice option.
            function choiceOption(option) {
                $('.option').remove();
                addButtonTissu(option);
            }

            function choiceTissu(value) {
                $('#choix' + rang).replaceWith("<img src=\"images/tissus/" + value + ".png\" id=\"choix" + rang + "\" class=\"image-button\" value=\"" + value + "\" rang=\"" + rang + "\"/>");

                selectItem['tissu' + rang] = value;

                console.log(selectItem);

                $('#option').removeClass('option-activ');

                return selectItem;
            }

            // Wrapper change.
            function newWrapper(cat, name, surname, option) {
                onRun = true;
                var $wrapperCat = $('#wrapper-' + cat);

                //ssi changement sousCat
                if (cat == false || cat == "undefined") {
                    selectItem['desc'] = name;
                    selectItem['price'] = $('.wrapper-modele option:selected').attr('price');
                    selectItem['surname'] = surname;

                    //ajouter option de choix(function)
                    choiceOption(option);
                    onRun = false;

                    return;
                }

                $('select', $('#wrapper-categorie')).val(cat);
                $('.show-wrapper').removeClass('show-wrapper');
                $wrapperCat.addClass('show-wrapper');

                //ssi changement cat
                if (surname == false || surname == "undefined") {
                    $('.option').remove();

                    if (cat != "String-Art") {
                        $('select', $wrapperCat).val('aucun');
                    }

                    try {
                        delete selectItem.desc;
                        delete selectItem.price;
                    }
                    catch (e) {
                    }
                }
                else {
                    $('select', $wrapperCat).val(surname);
                }


                selectItem['category'] = cat;
                selectItem['desc'] = name;
                selectItem['price'] = $('.wrapper-modele option:selected').attr('price');

                //ajouter option de choix(function)
                if (surname == false || surname == "undefined") {
                    onRun = false;
                    return selectItem;
                }
                else {
                    choiceOption(option);
                }

                onRun = false;

                return selectItem;
            }

            var onRun = false;

            // Event.
            $('#valid_commande').click(function () {
                var cart = getCart();
                var name = $('#name').val();
                var email = $('#email').val();
                var message = $('#message').val();
                console.log(cart);

                if (!name || !email || !message) {
                    alert('manque un champ');
                    return;
                }

                $.post("/api/send_mail", {
                    name: name,
                    email: email,
                    message: message,
                    cart: cart
                }, function (data, status) {
                    console.log(data, status);
                }).fail(function (error, a, b, c) {
                    console.log(error, a, b, c);
                    alert('une erreur est survenu veuillez reesayer');
                })

            })

            $('.select-wrapper').change(function () {
                if (onRun != true) {
                    var $select = $('select', $(this)),
                        catValue = $('select option:selected', $(this)).attr("cat"),
                        value = $('select option:selected', $(this)).val(),
                        nameValue = $('select option:selected', $(this)).attr("name"),
                        cat = false,
                        name = false,
                        surname = false,
                        option = $('select option:selected', $(this)).attr("option");
                    console.log(option);

                    if ($select.hasClass('category')) {
                        cat = catValue;
                    } else {
                        name = nameValue;
                        surname = value
                    }
                    newWrapper(cat, name, surname, option);
                }
                else {
                    return;
                }
            });

            $('.work').on('click', 'a', function () {
                var $this = $(this);

                if ($this.is(':not(.personnalise)'))
                    return;

                var cat = $this.attr('cat'),
                    name = $this.attr('name'),
                    surname = $this.attr('surname'),
                    option = $this.attr("option");

                $main._hide();

                setTimeout(function () {
                    $main._show('commande');

                    setTimeout(function () {
                        newWrapper(cat, name, surname, option);
                    }, 100);
                }, 750);
                return;
            }); selectItem

            $('input[class="ajouter"]').click(function () {
                if (!requeteEnCours) {
                    requeteEnCours = true;
                    addToCart(selectItem);
                    refreshTable();
                    requeteEnCours = false;
                }

                return;
            });

            $('input[type="date"]').change(function () {
                inputDate = new Date(this.value);
                date = inputDate.toDateString();
                return date;
            });

            $('#option-select').on('click', '.image-button', function () {
                $('#option').addClass('option-activ');
                $('#option').css({ 'display': 'block' })
                rang = $(this).attr('rang');
                return rang;
            });

            $('#option').on('click', 'img', function () {
                op = true;
                var value = $(this).attr('value');
                choiceTissu(value);
                return op;
            });

            refreshTable();
        });

        // Section, article methods.           
        $work._show = function () {
            $p.hide();
            $section.show();

            closeWorks();

            setTimeout(function () {
                $main.css({ 'flex-direction': 'row', 'justify-content': 'center' });
                $('.span', $works).addClass('works-img');
                $section.addClass('active');
            }, 10);

            //Cacher la croix
            $works.find(".close").hide();
        };

        $work._hide = function () {
            $section.removeClass('active');
            setTimeout(function () {
                $main.css('transform', 'translate(0,0)');
            }, delay);
        };

        $main._show = function (id, initial) {

            var $article = $main_articles.filter('#' + id);

            // No such article? Bail.
            if ($article.length == 0)
                return;

            // Handle lock.

            // Already locked? Speed through "show" steps w/o delays.
            if (locked || (typeof initial != 'undefined' && initial === true)) {

                // Mark as switching.
                $body.addClass('is-switching');

                // Mark as visible.
                $body.addClass('is-article-visible');

                // Deactivate all articles (just in case one's already active).
                $main_articles.removeClass('active');

                // Hide header, footer.
                $header.hide();
                $footer.hide();

                // Show main, article.
                $main.show();
                $article.show();

                // Activate article.
                $article.addClass('active');

                // Activate section.
                if ($article.hasClass('work'))
                    $work._show(true);

                // Unlock.
                locked = false;

                // Unmark as switching.
                setTimeout(function () {
                    $body.removeClass('is-switching');
                }, (initial ? 1000 : 0));

                return;

            }

            // Lock.
            locked = true;

            // Article already visible? Just swap articles.
            if ($body.hasClass('is-article-visible')) {

                // Deactivate current article.
                var $currentArticle = $main_articles.filter('.active');

                $currentArticle.removeClass('active');

                // Show article.
                setTimeout(function () {

                    // Hide current article.
                    $currentArticle.hide();

                    // Show article.
                    $article.show();

                    // Activate article.
                    setTimeout(function () {

                        $article.addClass('active');

                        // Activate section.
                        if ($article.hasClass('work'))
                            $work._show(true);

                        // Window stuff.
                        $window
                            .scrollTop(0)
                            .triggerHandler('resize.flexbox-fix');

                        // Unlock.
                        setTimeout(function () {
                            locked = false;
                        }, delay);

                    }, 25);

                }, delay);

            }

            // Otherwise, handle as normal.
            else {

                // Mark as visible.
                $body
                    .addClass('is-article-visible');

                // Show article.
                setTimeout(function () {

                    // Hide header, footer.
                    $header.hide();
                    $footer.hide();

                    // Show main, article.
                    $main.show();
                    $article.show();

                    // Activate article.
                    setTimeout(function () {

                        $article.addClass('active');

                        // Activate section.
                        if ($article.hasClass('work'))
                            $work._show(true);
                        // Window stuff.
                        $window
                            .scrollTop(0)
                            .triggerHandler('resize.flexbox-fix');

                        // Unlock.
                        setTimeout(function () {
                            locked = false;
                        }, delay);

                    }, 25);

                }, delay);

            }

        };

        $main._hide = function (addState) {

            var $article = $main_articles.filter('.active');

            // Article not visible? Bail.
            if (!$body.hasClass('is-article-visible'))
                return;

            // Add state?
            if (typeof addState != 'undefined'
                && addState === true)
                history.pushState(null, null, '#');

            // Handle lock.

            // Already locked? Speed through "hide" steps w/o delays.
            if (locked) {

                // Mark as switching.
                $body.addClass('is-switching');

                // Deactivate article.
                $article.removeClass('active');

                // Hide article, section, main.
                $('#option').css({ 'display': 'none' });
                $work._hide(true);
                $section.hide();
                $article.hide();
                $main.hide();

                // Activate p.
                $p.show();

                // Show footer, header.
                $footer.show();
                $header.show();

                // Unmark as visible.
                $body.removeClass('is-article-visible');

                // Unlock.
                locked = false;

                // Unmark as switching.
                $body.removeClass('is-switching');

                // Window stuff.
                $window
                    .scrollTop(0)
                    .triggerHandler('resize.flexbox-fix');

                return;

            }

            // Lock.
            locked = true;

            // Deactivate article.
            $article.removeClass('active');

            // Hide article.
            setTimeout(function () {

                // Hide article, section, main.
                $('#option').css({ 'display': 'none' });
                $work._hide(true);
                $section.hide();
                $article.hide();
                $main.hide();

                // Activate p.
                $p.show();

                // Show footer, header.
                $footer.show();
                $header.show();

                // Unmark as visible.
                setTimeout(function () {

                    $body.removeClass('is-article-visible');

                    // Window stuff.
                    $window
                        .scrollTop(0)
                        .triggerHandler('resize.flexbox-fix');

                    // Unlock.
                    setTimeout(function () {
                        locked = false;
                    }, delay);

                }, 25);

            }, delay);


        };

        // Articles, sections.
        $main_articles.each(function () {

            var $this = $(this);

            // Close.
            $('<div class="close">Close</div>')
                .appendTo($this)
                .on('click', function () {
                    location.hash = '';
                });

            // Prevent clicks from inside article from bubbling.
            $this.on('click', function (event) {
                event.stopPropagation();
            });

            // Prevent clicks from inside section from bubbling.
            $section.on('click', function (event) {
                event.stopPropagation();
            });

        });

        $section.each(function () {

            var $this = $(this);

            $('<div class="close">Close</div>')
                .appendTo($this)
                .on('click', function () {
                    location.hash = '';
                });
        });

        // Events.
        $works.click(function () {

            //Identifier le work cliqué
            var clickedWork = $(this);
            var clickedWorkName = $(this).attr('id');


            //Ouvrir un work : 
            var openWork = function () {

                clickedWork.removeClass("fade");
                clickedWork.addClass("big");
                clickedWork.find(".image").removeClass("works-img");
                $(".work-image-class").hide();
                clickedWork.find("p").show();

                addProduct(clickedWork);
                window.scrollTo(0, 0);

                //Ajouter la croix pour fermer
                $('<div class="close close-work">Close</div>')
                    .appendTo(clickedWork)
                    .on('click', function () {
                        clickedWork.addClass("fade");
                        setTimeout(closeWorks, delay);
                    });

                //Mettre la taille des 3 autres à 0
                $works.each(function (index, w) {
                    var wId = $(w).attr("id");

                    if (wId != clickedWorkName) {
                        $(w).addClass("small");
                    }
                });
            }
            if (clickedWork.hasClass("big")) {
                return;
            }

            //Ajouter la classe fade aux works
            $works.addClass("fade");


            //Attendre la fin du fade (200ms)
            setTimeout(openWork, delay);

        });

        var op = false;

        $body.on('click', function (event) {

            if (op == false) {
                // Article visible? Hide.
                if ($body.hasClass('is-article-visible'))
                    $main._hide(true);
            }
        });

        $window.on('keyup', function (event) {

            switch (event.keyCode) {

                case 27:

                    if (op == false) {
                        // Article visible? Hide.
                        if ($body.hasClass('is-article-visible'))
                            $main._hide(true);
                    }
                    break;

                default:
                    break;

            }

        });

        $window.on('hashchange', function (event) {

            // Empty hash?
            if (location.hash == ''
                || location.hash == '#') {

                // Prevent default.
                event.preventDefault();
                event.stopPropagation();

                // Hide.
                $main._hide();

            }

            // Otherwise, check for a matching article.
            else if ($main_articles.filter(location.hash).length > 0) {

                // Prevent default.
                event.preventDefault();
                event.stopPropagation();

                // Show article.
                $main._show(location.hash.substr(1));

            }

        });

        // Input affix.
        $('#hauteur').suffix('cm');
        $('#largeur').suffix('cm');

        // Disable animations/transitions until the page has loaded.
        $body.addClass('is-loading');

        $window.on('load', function () {
            window.setTimeout(function () {
                $body.removeClass('is-loading');
            }, 100);

            var imageSelect = $($('.image-select'), $(this));
            createTissu();
        });

        // Fix: Placeholder polyfill.
        $('form').placeholder();

        // Fix: Flexbox min-height bug on IE.
        if (skel.vars.IEVersion < 12) {

            var flexboxFixTimeoutId;

            $window.on('resize.flexbox-fix', function () {

                clearTimeout(flexboxFixTimeoutId);

                flexboxFixTimeoutId = setTimeout(function () {

                    if ($wrapper.prop('scrollHeight') > $window.height())
                        $wrapper.css('height', 'auto');
                    else
                        $wrapper.css('height', '100vh');

                }, 250);

            }).triggerHandler('resize.flexbox-fix');

        }

        // Nav.
        var $nav = $header.children('nav'),
            $nav_li = $nav.find('li');

        // Add "middle" alignment classes if we're dealing with an even number of items.
        if ($nav_li.length % 2 == 0) {

            $nav.addClass('use-middle');
            $nav_li.eq(($nav_li.length / 2)).addClass('is-middle');

        }

        // Scroll restoration.
        // This prevents the page from scrolling back to the top on a hashchange.
        if ('scrollRestoration' in history)
            history.scrollRestoration = 'manual';
        else {

            var oldScrollPos = 0,
                scrollPos = 0,
                $htmlbody = $('html,body');

            $window
                .on('scroll', function () {

                    oldScrollPos = scrollPos;
                    scrollPos = $htmlbody.scrollTop();

                })
                .on('hashchange', function () {
                    $window.scrollTop(oldScrollPos);
                });

        }

        // Initialize.

        // Hide main, articles.
        $main.hide();
        $main_articles.hide();

        // Initial article.
        if (location.hash != ''
            && location.hash != '#')
            $window.on('load', function () {
                $main._show(location.hash.substr(1), true);
            });

    });

})(jQuery);