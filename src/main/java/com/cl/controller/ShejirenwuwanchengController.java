package com.cl.controller;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Map;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Date;
import java.util.List;
import javax.servlet.http.HttpServletRequest;

import com.cl.utils.ValidatorUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.cl.annotation.IgnoreAuth;

import com.cl.entity.ShejirenwuwanchengEntity;
import com.cl.entity.view.ShejirenwuwanchengView;

import com.cl.service.ShejirenwuwanchengService;
import com.cl.service.TokenService;
import com.cl.utils.PageUtils;
import com.cl.utils.R;
import com.cl.utils.MPUtil;
import com.cl.utils.CommonUtil;
import java.io.IOException;

/**
 * 设计任务完成
 * 后端接口
 * @author 
 * @email 
 * @date 2024-04-09 11:33:40
 */
@RestController
@RequestMapping("/shejirenwuwancheng")
public class ShejirenwuwanchengController {
    @Autowired
    private ShejirenwuwanchengService shejirenwuwanchengService;



    


    /**
     * 后端列表
     */
    @RequestMapping("/page")
    public R page(@RequestParam Map<String, Object> params,ShejirenwuwanchengEntity shejirenwuwancheng,
		HttpServletRequest request){
        EntityWrapper<ShejirenwuwanchengEntity> ew = new EntityWrapper<ShejirenwuwanchengEntity>();

        String tableName = request.getSession().getAttribute("tableName").toString();
        ew.andNew();
        if(tableName.equals("yonghu")) {
            ew.eq("yonghuzhanghao", (String)request.getSession().getAttribute("username"));
        }
        if(tableName.equals("yonghu")) {
            ew.or();
            ew.eq("shejishizhanghao", (String)request.getSession().getAttribute("username"));
        }
		PageUtils page = shejirenwuwanchengService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, shejirenwuwancheng), params), params));

        return R.ok().put("data", page);
    }
    
    /**
     * 前端列表
     */
	@IgnoreAuth
    @RequestMapping("/list")
    public R list(@RequestParam Map<String, Object> params,ShejirenwuwanchengEntity shejirenwuwancheng, 
		HttpServletRequest request){
        EntityWrapper<ShejirenwuwanchengEntity> ew = new EntityWrapper<ShejirenwuwanchengEntity>();

		PageUtils page = shejirenwuwanchengService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, shejirenwuwancheng), params), params));
        return R.ok().put("data", page);
    }

	/**
     * 列表
     */
    @RequestMapping("/lists")
    public R list( ShejirenwuwanchengEntity shejirenwuwancheng){
       	EntityWrapper<ShejirenwuwanchengEntity> ew = new EntityWrapper<ShejirenwuwanchengEntity>();
      	ew.allEq(MPUtil.allEQMapPre( shejirenwuwancheng, "shejirenwuwancheng")); 
        return R.ok().put("data", shejirenwuwanchengService.selectListView(ew));
    }

	 /**
     * 查询
     */
    @RequestMapping("/query")
    public R query(ShejirenwuwanchengEntity shejirenwuwancheng){
        EntityWrapper< ShejirenwuwanchengEntity> ew = new EntityWrapper< ShejirenwuwanchengEntity>();
 		ew.allEq(MPUtil.allEQMapPre( shejirenwuwancheng, "shejirenwuwancheng")); 
		ShejirenwuwanchengView shejirenwuwanchengView =  shejirenwuwanchengService.selectView(ew);
		return R.ok("查询设计任务完成成功").put("data", shejirenwuwanchengView);
    }
	
    /**
     * 后端详情
     */
    @RequestMapping("/info/{id}")
    public R info(@PathVariable("id") Long id){
        ShejirenwuwanchengEntity shejirenwuwancheng = shejirenwuwanchengService.selectById(id);
		shejirenwuwancheng = shejirenwuwanchengService.selectView(new EntityWrapper<ShejirenwuwanchengEntity>().eq("id", id));
        return R.ok().put("data", shejirenwuwancheng);
    }

    /**
     * 前端详情
     */
	@IgnoreAuth
    @RequestMapping("/detail/{id}")
    public R detail(@PathVariable("id") Long id){
        ShejirenwuwanchengEntity shejirenwuwancheng = shejirenwuwanchengService.selectById(id);
		shejirenwuwancheng = shejirenwuwanchengService.selectView(new EntityWrapper<ShejirenwuwanchengEntity>().eq("id", id));
        return R.ok().put("data", shejirenwuwancheng);
    }
    



    /**
     * 后端保存
     */
    @RequestMapping("/save")
    public R save(@RequestBody ShejirenwuwanchengEntity shejirenwuwancheng, HttpServletRequest request){
    	shejirenwuwancheng.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(shejirenwuwancheng);
        shejirenwuwanchengService.insert(shejirenwuwancheng);
        return R.ok();
    }
    
    /**
     * 前端保存
     */
    @RequestMapping("/add")
    public R add(@RequestBody ShejirenwuwanchengEntity shejirenwuwancheng, HttpServletRequest request){
    	shejirenwuwancheng.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(shejirenwuwancheng);
        shejirenwuwanchengService.insert(shejirenwuwancheng);
        return R.ok();
    }



    /**
     * 修改
     */
    @RequestMapping("/update")
    @Transactional
    public R update(@RequestBody ShejirenwuwanchengEntity shejirenwuwancheng, HttpServletRequest request){
        //ValidatorUtils.validateEntity(shejirenwuwancheng);
        shejirenwuwanchengService.updateById(shejirenwuwancheng);//全部更新
        return R.ok();
    }



    

    /**
     * 删除
     */
    @RequestMapping("/delete")
    public R delete(@RequestBody Long[] ids){
        shejirenwuwanchengService.deleteBatchIds(Arrays.asList(ids));
        return R.ok();
    }
    
	








}
