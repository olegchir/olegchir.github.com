function trackDeal() {
	var id = $('#trackDealBtn').attr('href');
	post('user/track' + id + '.json', function(msg) {
		showMessage(msg);
	});
	return false;
};

var deals = 'my';

$(function() {
	$('input[name=sizeoffinancing]').each(function(){ $(this).defaultvalue('Size of Financing'); });
	$('input[name=corevenue]').each(function(){ $(this).defaultvalue('Co. Revenue'); });
	$('input[name=coebitda]').each(function(){ $(this).defaultvalue('Co. EBITDA'); });
	$('input[name=location]').each(function(){ $(this).defaultvalue('Location'); });
	$('input[name=keyword]').each(function(){ $(this).defaultvalue('Keyword'); });

	$('#createFromScratch').click(function() {
		window.location = 'user/create-transaction';
		return false;
	});

	$('#dealWorkBtn').click(function() {
		$('#dialogTrxWork').dialog('open');
		return false;
	});
});

var pop;

function printDeal() {
	var id = $('#printDealBtn').attr('href');
  pop = window.open('', 'Print Transaction', 'width=823,height=827');
  pop.document.write('<html><head><link type="text/css" href="css/style.css" rel="stylesheet" /><link type="text/css" href="css/style.old.css" rel="stylesheet" /></head><body style="padding: 5px;">' +
		  $('#dialogTrx').html()
		  + '</body></html>');
  var tacts = pop.document.getElementById('tableActions');
  pop.document.getElementById('tableActionsContainer').removeChild(tacts);
  pop.focus();
  pop.print();
	return false;
}

function openDealWork() {
	$('#dialogTrxWork').dialog('open');
	return false;
}

function PageViewModel() {
    // Data
    var self = this;
    self.pages = [1, 2, 3, 4, 5];
    self.chosenPageId = ko.observable();
    self.chosenPageData = ko.observable();
    self.chosenTrxData = ko.observable();

    // Behaviours    
    self.goToPage = function(page) {
				self.chosenTrxData(null);
				$('#dialogTrx').dialog('close');
        self.chosenPageId(page);
        $.get('user/transactions.json', { page: page, case: deals }, self.chosenPageData);
    };

    self.goToTrx = function(trx) { 
        //self.chosenFolderId(mail.folder);
        //self.chosenFolderData(null); // Stop showing a folder
        $.get('user/transaction' + '/' + trx.id + '.json', {}, self.chosenTrxData);
        $('#dialogTrx').dialog('open');
    };

    // Show inbox by default
    self.goToPage('1');
};

$(function() {
	$("#dialogTrx").dialog({
		autoOpen: false, 
		modal: true, 
		width: '822px', 
		resizable: false, 
		draggable: true,
		close: function() {
			//validatorMessageRemoveErrMsgAll();
		},
		open: function() {
			//validatorMessageRemoveErrMsgAll();
		}
	});

	$("#dialogTrxWork").dialog({
		autoOpen: false, 
		modal: true, 
		width: '822px', 
		resizable: false, 
		draggable: true,
		close: function() {
			//validatorMessageRemoveErrMsgAll();
		},
		open: function() {
			//validatorMessageRemoveErrMsgAll();
		}
	});

//    Automatically resize dialogs in mobile mode, center horizontally in normal mode
    function resizeDialogs() {
        var hwnd = $(window);
        var dialogs = [$("#dialogTrx"),$("#dialogTrxWork")];

        for (var i = 0; i < dialogs.length; i++) {
            var theDialog = dialogs[i];
            if (hwnd.width()>766) {
                theDialog.dialog( "option", "width", '822px' );
            } else {
                theDialog.dialog( "option", "width", '300px' );
            }
        }
    }
    var resizeTimer;
    $(window).resize(function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(resizeDialogs, 100);
    });
    resizeDialogs();
//    End of: Automatically resize dialogs...


	ko.applyBindings(new PageViewModel());

	newNameFrmValidator = $('#submitNameFrm').validate({
		rules: {
			restrictedName: {
				required: true
			}
		},
		submitHandler: function(form) {
			$(form).ajaxSubmit({
				dataType: 'json',
				success: function(resp) {
					resp = normalizeResponse(resp);
					showMessage(resp.message);
					var names = eval(resp.names);
					var s = '';
					$.each(names, function() {
						s += this.name + ', ';
					});
					s = s.replace(/,\s*$/, '');
					$('#mynamescontainer').html(s);
				}
			});

			return false;
		}
	});
});

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

ko.bindingHandlers.numericWithComas = {
    update: function(element, valueAccessor, allBindingsAccessor) {
       var value = ko.utils.unwrapObservable(valueAccessor()),
           formattedValue = (null == value)?null:numberWithCommas(value);
        
        ko.bindingHandlers.text.update(element, function() { return formattedValue; });
    }
};

