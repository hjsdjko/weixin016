package com.cl.entity.view;

import com.cl.entity.DiscussxuexiziyuanEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;
import java.math.BigDecimal;

import java.io.Serializable;
import com.cl.utils.EncryptUtil;
 

/**
 * 学习资源评论表
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2024-04-09 11:33:40
 */
@TableName("discussxuexiziyuan")
public class DiscussxuexiziyuanView  extends DiscussxuexiziyuanEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public DiscussxuexiziyuanView(){
	}
 
 	public DiscussxuexiziyuanView(DiscussxuexiziyuanEntity discussxuexiziyuanEntity){
 	try {
			BeanUtils.copyProperties(this, discussxuexiziyuanEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}


}
