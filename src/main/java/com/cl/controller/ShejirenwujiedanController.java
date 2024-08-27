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

import com.cl.entity.ShejirenwujiedanEntity;
import com.cl.entity.view.ShejirenwujiedanView;

import com.cl.service.ShejirenwujiedanService;
import com.cl.service.TokenService;
import com.cl.utils.PageUtils;
import com.cl.utils.R;
import com.cl.utils.MPUtil;
import com.cl.utils.CommonUtil;
import java.io.IOException;

/**
 * 设计任务接单
 * 后端接口
 * @author 
 * @email 
 * @date 2024-04-09 11:33:39
 */
@RestController
@RequestMapping("/shejirenwujiedan")
public class ShejirenwujiedanController {
    @Autowired
    private ShejirenwujiedanService shejirenwujiedanService;



    


    /**
     * 后端列表
     */
    @RequestMapping("/page")
    public R page(@RequestParam Map<String, Object> params,ShejirenwujiedanEntity shejirenwujiedan,
		HttpServletRequest request){
        EntityWrapper<ShejirenwujiedanEntity> ew = new EntityWrapper<ShejirenwujiedanEntity>();

        String tableName = request.getSession().getAttribute("tableName").toString();
        ew.andNew();
        if(tableName.equals("yonghu")) {
            ew.eq("yonghuzhanghao", (String)request.getSession().getAttribute("username"));
        }
        if(tableName.equals("yonghu")) {
            ew.or();
            ew.eq("shejishizhanghao", (String)request.getSession().getAttribute("username"));
        }
		PageUtils page = shejirenwujiedanService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, shejirenwujiedan), params), params));

        return R.ok().put("data", page);
    }
    
    /**
     * 前端列表
     */
	@IgnoreAuth
    @RequestMapping("/list")
    public R list(@RequestParam Map<String, Object> params,ShejirenwujiedanEntity shejirenwujiedan, 
		HttpServletRequest request){
        EntityWrapper<ShejirenwujiedanEntity> ew = new EntityWrapper<ShejirenwujiedanEntity>();

		PageUtils page = shejirenwujiedanService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, shejirenwujiedan), params), params));
        return R.ok().put("data", page);
    }

	/**
     * 列表
     */
    @RequestMapping("/lists")
    public R list( ShejirenwujiedanEntity shejirenwujiedan){
       	EntityWrapper<ShejirenwujiedanEntity> ew = new EntityWrapper<ShejirenwujiedanEntity>();
      	ew.allEq(MPUtil.allEQMapPre( shejirenwujiedan, "shejirenwujiedan")); 
        return R.ok().put("data", shejirenwujiedanService.selectListView(ew));
    }

	 /**
     * 查询
     */
    @RequestMapping("/query")
    public R query(ShejirenwujiedanEntity shejirenwujiedan){
        EntityWrapper< ShejirenwujiedanEntity> ew = new EntityWrapper< ShejirenwujiedanEntity>();
 		ew.allEq(MPUtil.allEQMapPre( shejirenwujiedan, "shejirenwujiedan")); 
		ShejirenwujiedanView shejirenwujiedanView =  shejirenwujiedanService.selectView(ew);
		return R.ok("查询设计任务接单成功").put("data", shejirenwujiedanView);
    }
	
    /**
     * 后端详情
     */
    @RequestMapping("/info/{id}")
    public R info(@PathVariable("id") Long id){
        ShejirenwujiedanEntity shejirenwujiedan = shejirenwujiedanService.selectById(id);
		shejirenwujiedan = shejirenwujiedanService.selectView(new EntityWrapper<ShejirenwujiedanEntity>().eq("id", id));
        return R.ok().put("data", shejirenwujiedan);
    }

    /**
     * 前端详情
     */
	@IgnoreAuth
    @RequestMapping("/detail/{id}")
    public R detail(@PathVariable("id") Long id){
        ShejirenwujiedanEntity shejirenwujiedan = shejirenwujiedanService.selectById(id);
		shejirenwujiedan = shejirenwujiedanService.selectView(new EntityWrapper<ShejirenwujiedanEntity>().eq("id", id));
        return R.ok().put("data", shejirenwujiedan);
    }
    



    /**
     * 后端保存
     */
    @RequestMapping("/save")
    public R save(@RequestBody ShejirenwujiedanEntity shejirenwujiedan, HttpServletRequest request){
    	shejirenwujiedan.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(shejirenwujiedan);
        shejirenwujiedanService.insert(shejirenwujiedan);
        return R.ok();
    }
    
    /**
     * 前端保存
     */
    @RequestMapping("/add")
    public R add(@RequestBody ShejirenwujiedanEntity shejirenwujiedan, HttpServletRequest request){
    	shejirenwujiedan.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(shejirenwujiedan);
        shejirenwujiedanService.insert(shejirenwujiedan);
        return R.ok();
    }



    /**
     * 修改
     */
    @RequestMapping("/update")
    @Transactional
    public R update(@RequestBody ShejirenwujiedanEntity shejirenwujiedan, HttpServletRequest request){
        //ValidatorUtils.validateEntity(shejirenwujiedan);
        shejirenwujiedanService.updateById(shejirenwujiedan);//全部更新
        return R.ok();
    }



    

    /**
     * 删除
     */
    @RequestMapping("/delete")
    public R delete(@RequestBody Long[] ids){
        shejirenwujiedanService.deleteBatchIds(Arrays.asList(ids));
        return R.ok();
    }
    
	








}
