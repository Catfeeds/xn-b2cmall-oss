package com.xnjr.app.product.req;

import com.xnjr.app.req.APageReq;

/** 
 * @author: xieyj 
 * @since: 2016年5月24日 上午9:13:00 
 * @history:
 */
public class XN601042Req extends APageReq {

    /** 
     * @Fields serialVersionUID : TODO(用一句话描述这个变量表示什么) 
     */
    private static final long serialVersionUID = 1L;

    // 编号（选填）
    private String code;

    // 型号编号（选填）
    private String modelCode;

    // 受众（选填）
    private String toLevel;

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getModelCode() {
        return modelCode;
    }

    public void setModelCode(String modelCode) {
        this.modelCode = modelCode;
    }

    public String getToLevel() {
        return toLevel;
    }

    public void setToLevel(String toLevel) {
        this.toLevel = toLevel;
    }
}
