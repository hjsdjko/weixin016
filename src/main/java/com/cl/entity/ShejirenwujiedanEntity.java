package com.cl.entity;

import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.apache.commons.beanutils.BeanUtils;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.enums.FieldFill;
import com.baomidou.mybatisplus.enums.IdType;


/**
 * 设计任务接单
 * 数据库通用操作实体类（普通增删改查）
 * @author 
 * @email 
 * @date 2024-04-09 11:33:39
 */
@TableName("shejirenwujiedan")
public class ShejirenwujiedanEntity<T> implements Serializable {
	private static final long serialVersionUID = 1L;


	public ShejirenwujiedanEntity() {
		
	}
	
	public ShejirenwujiedanEntity(T t) {
		try {
			BeanUtils.copyProperties(this, t);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	/**
	 * 主键id
	 */
	@TableId
	private Long id;
	/**
	 * 任务名称
	 */
					
	private String renwumingcheng;
	
	/**
	 * 任务图片
	 */
					
	private String renwutupian;
	
	/**
	 * 任务类型
	 */
					
	private String renwuleixing;
	
	/**
	 * 需要时间
	 */
				
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat 		
	private Date xuyaoshijian;
	
	/**
	 * 用户姓名
	 */
					
	private String yonghuxingming;
	
	/**
	 * 用户账号
	 */
					
	private String yonghuzhanghao;
	
	/**
	 * 设计师账号
	 */
					
	private String shejishizhanghao;
	
	/**
	 * 设计师姓名
	 */
					
	private String shejishixingming;
	
	/**
	 * 接单时间
	 */
				
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat 		
	private Date jiedanshijian;
	
	/**
	 * 状态
	 */
					
	private String zhuangtai;
	
	
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat
	private Date addtime;

	public Date getAddtime() {
		return addtime;
	}
	public void setAddtime(Date addtime) {
		this.addtime = addtime;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	/**
	 * 设置：任务名称
	 */
	public void setRenwumingcheng(String renwumingcheng) {
		this.renwumingcheng = renwumingcheng;
	}
	/**
	 * 获取：任务名称
	 */
	public String getRenwumingcheng() {
		return renwumingcheng;
	}
	/**
	 * 设置：任务图片
	 */
	public void setRenwutupian(String renwutupian) {
		this.renwutupian = renwutupian;
	}
	/**
	 * 获取：任务图片
	 */
	public String getRenwutupian() {
		return renwutupian;
	}
	/**
	 * 设置：任务类型
	 */
	public void setRenwuleixing(String renwuleixing) {
		this.renwuleixing = renwuleixing;
	}
	/**
	 * 获取：任务类型
	 */
	public String getRenwuleixing() {
		return renwuleixing;
	}
	/**
	 * 设置：需要时间
	 */
	public void setXuyaoshijian(Date xuyaoshijian) {
		this.xuyaoshijian = xuyaoshijian;
	}
	/**
	 * 获取：需要时间
	 */
	public Date getXuyaoshijian() {
		return xuyaoshijian;
	}
	/**
	 * 设置：用户姓名
	 */
	public void setYonghuxingming(String yonghuxingming) {
		this.yonghuxingming = yonghuxingming;
	}
	/**
	 * 获取：用户姓名
	 */
	public String getYonghuxingming() {
		return yonghuxingming;
	}
	/**
	 * 设置：用户账号
	 */
	public void setYonghuzhanghao(String yonghuzhanghao) {
		this.yonghuzhanghao = yonghuzhanghao;
	}
	/**
	 * 获取：用户账号
	 */
	public String getYonghuzhanghao() {
		return yonghuzhanghao;
	}
	/**
	 * 设置：设计师账号
	 */
	public void setShejishizhanghao(String shejishizhanghao) {
		this.shejishizhanghao = shejishizhanghao;
	}
	/**
	 * 获取：设计师账号
	 */
	public String getShejishizhanghao() {
		return shejishizhanghao;
	}
	/**
	 * 设置：设计师姓名
	 */
	public void setShejishixingming(String shejishixingming) {
		this.shejishixingming = shejishixingming;
	}
	/**
	 * 获取：设计师姓名
	 */
	public String getShejishixingming() {
		return shejishixingming;
	}
	/**
	 * 设置：接单时间
	 */
	public void setJiedanshijian(Date jiedanshijian) {
		this.jiedanshijian = jiedanshijian;
	}
	/**
	 * 获取：接单时间
	 */
	public Date getJiedanshijian() {
		return jiedanshijian;
	}
	/**
	 * 设置：状态
	 */
	public void setZhuangtai(String zhuangtai) {
		this.zhuangtai = zhuangtai;
	}
	/**
	 * 获取：状态
	 */
	public String getZhuangtai() {
		return zhuangtai;
	}

}
