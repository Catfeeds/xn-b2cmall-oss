package com.xnjr.app.product.req;

/**
 * 发货确认
 * @author: xieyj 
 * @since: 2016年5月23日 上午8:46:53 
 * @history:
 */
public class XN602024Req {

    // 编号（必填）
    private String code;

    // 发货人（必填）
    private String approveUser;

    // 发货备注（选填）
    private String approveNote;

    public String getCode() {
        return code;
    }

    public String getApproveUser() {
        return approveUser;
    }

    public void setApproveUser(String approveUser) {
        this.approveUser = approveUser;
    }

    public String getApproveNote() {
        return approveNote;
    }

    public void setApproveNote(String approveNote) {
        this.approveNote = approveNote;
    }

    public void setCode(String code) {
        this.code = code;
    }
}
