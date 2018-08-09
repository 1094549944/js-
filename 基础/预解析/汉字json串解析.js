var obj = {
  "功能权限": {
    "核算组": {
      "添加": "agent_AuditGroupAdd",
      "设置组长": "agent_AuditGroupSetHead",
      "设置组员": "agent_AuditGroupSetMember"
    },
    "核算用户": {
      "分配": "agent_AuditUserAssign",
      "修改": "agent_AuditUserModify"
    },
    "账簿": {
      "做账完成": "agent_AccountSettle",
      "科目": {
        "导出PDF": "agent_AccountSubjectExportPDF",
        "导出Excel": "agent_AccountSubjectExportExcel",
        "打印": "agent_AccountSubjectPrint"
      }
    },
    "待处理凭证": {
      "驳回至审核": "agent_PendingVoucherRejectToReview",
      "驳回至上传": "agent_PendingVoucherRejectToUpload",
      "保存": "agent_PendingVoucherSave"
    },
    "凭证": {
      "期末结转": "agent_VoucherFinalSettle",
      "凭证详情": {
        "驳回记录": "agent_VoucherDetailViewRejections",
        "驳回重审": "agent_VoucherDetailReject",
        "打印": "agent_VoucherDetailPrint",
        "批量打印": "agent_VoucherDetailPrintInBatch"
      }
    },
    "票据": {
      "查看": "agent_InvoiceView",
      "驳回": "agent_InvoiceReject",
      "凭证预览": "agent_InvoiceVoucherPreview",
      "审核": {
        "驳回": "agent_InvoiceReviewReject",
        "确认": "agent_InvoiceReviewPass"
      },
      "录入": {
        "保存": "agent_InvoiceTypingSave",
        "驳回": "agent_InvoiceTypingReject"
      }
    }
  },
  "菜单权限": {
    "企业左侧菜单": {
      "总览": "agent_menu_EnterpriseMenuOverview",
      "期初设置": "agent_menu_EnterpriseMenuInitialSetting",
      "基础设置": "agent_menu_EnterpriseMenuBasicSetting",
      "票据": "agent_menu_EnterpriseMenuInvoice",
      "期末": "agent_menu_EnterpriseMenuFinal",
      "稅表": {
        "增值税": "agent_menu_EnterpriseMenuTaxReportVAT",
        "企业所得税": "agent_menu_EnterpriseMenuTaxReportEnterpriseIncomeTax",
        "附加税": "agent_menu_EnterpriseMenuTaxReportAdditionalTax"
      }
    }
  }
}

function isObj (obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

var arr = [];
function getMenu (obj, arr) {

  for (var key in obj) {
    var item = {};
    var tmp = obj[key];
    item.title = key;
    getChild(item, tmp);
    //最外层单独处理
    arr.push(item);
  }
}


function getChild (item, tmp) {
  if (isObj(tmp)) {
    item.key = "123";
    item.children = [];
    for (var key in tmp) {
      var tmpChild = {};
      tmpChild.title = key;
      getChild(tmpChild, tmp[key]);
      item.children.push(tmpChild);
    }
  } else {
    item.key = tmp;
  }
  return;
}
getMenu(obj, arr);
console.log(JSON.stringify(arr))