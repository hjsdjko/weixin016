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

import com.cl.entity.ShejirenwuEntity;
import com.cl.entity.view.ShejirenwuView;

import com.cl.service.ShejirenwuService;
import com.cl.service.TokenService;
import com.cl.utils.PageUtils;
import com.cl.utils.R;
import com.cl.utils.MPUtil;
import com.cl.utils.CommonUtil;
import java.io.IOException;
import com.cl.service.StoreupService;
import com.cl.entity.StoreupEntity;

/**
 * 设计任务
 * 后端接口
 * @author 
 * @email 
 * @date 2024-04-09 11:33:39
 */
@RestController
@RequestMapping("/shejirenwu")
public class ShejirenwuController {
    @Autowired
    private ShejirenwuService shejirenwuService;

    @Autowired
    private StoreupService storeupService;


    


    /**
     * 后端列表
     */
    @RequestMapping("/page")
    public R page(@RequestParam Map<String, Object> params,ShejirenwuEntity shejirenwu,
		HttpServletRequest request){
		String tableName = request.getSession().getAttribute("tableName").toString();
		if(tableName.equals("yonghu")) {
			shejirenwu.setYonghuzhanghao((String)request.getSession().getAttribute("username"));
		}
        EntityWrapper<ShejirenwuEntity> ew = new EntityWrapper<ShejirenwuEntity>();

		PageUtils page = shejirenwuService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, shejirenwu), params), params));

        return R.ok().put("data", page);
    }
    
    /**
     * 前端列表
     */
	@IgnoreAuth
    @RequestMapping("/list")
    public R list(@RequestParam Map<String, Object> params,ShejirenwuEntity shejirenwu, 
		HttpServletRequest request){
        EntityWrapper<ShejirenwuEntity> ew = new EntityWrapper<ShejirenwuEntity>();

		PageUtils page = shejirenwuService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, shejirenwu), params), params));
        return R.ok().put("data", page);
    }

	/**
     * 列表
     */
    @RequestMapping("/lists")
    public R list( ShejirenwuEntity shejirenwu){
       	EntityWrapper<ShejirenwuEntity> ew = new EntityWrapper<ShejirenwuEntity>();
      	ew.allEq(MPUtil.allEQMapPre( shejirenwu, "shejirenwu")); 
        return R.ok().put("data", shejirenwuService.selectListView(ew));
    }

	 /**
     * 查询
     */
    @RequestMapping("/query")
    public R query(ShejirenwuEntity shejirenwu){
        EntityWrapper< ShejirenwuEntity> ew = new EntityWrapper< ShejirenwuEntity>();
 		ew.allEq(MPUtil.allEQMapPre( shejirenwu, "shejirenwu")); 
		ShejirenwuView shejirenwuView =  shejirenwuService.selectView(ew);
		return R.ok("查询设计任务成功").put("data", shejirenwuView);
    }
	
    /**
     * 后端详情
     */
    @RequestMapping("/info/{id}")
    public R info(@PathVariable("id") Long id){
        ShejirenwuEntity shejirenwu = shejirenwuService.selectById(id);
		shejirenwu = shejirenwuService.selectView(new EntityWrapper<ShejirenwuEntity>().eq("id", id));
        return R.ok().put("data", shejirenwu);
    }

    /**
     * 前端详情
     */
	@IgnoreAuth
    @RequestMapping("/detail/{id}")
    public R detail(@PathVariable("id") Long id){
        ShejirenwuEntity shejirenwu = shejirenwuService.selectById(id);
		shejirenwu = shejirenwuService.selectView(new EntityWrapper<ShejirenwuEntity>().eq("id", id));
        return R.ok().put("data", shejirenwu);
    }
    



    /**
     * 后端保存
     */
    @RequestMapping("/save")
    public R save(@RequestBody ShejirenwuEntity shejirenwu, HttpServletRequest request){
    	shejirenwu.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(shejirenwu);
        shejirenwuService.insert(shejirenwu);
        return R.ok();
    }
    
    /**
     * 前端保存
     */
    @RequestMapping("/add")
    public R add(@RequestBody ShejirenwuEntity shejirenwu, HttpServletRequest request){
    	shejirenwu.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(shejirenwu);
        shejirenwuService.insert(shejirenwu);
        return R.ok();
    }



    /**
     * 修改
     */
    @RequestMapping("/update")
    @Transactional
    public R update(@RequestBody ShejirenwuEntity shejirenwu, HttpServletRequest request){
        //ValidatorUtils.validateEntity(shejirenwu);
        shejirenwuService.updateById(shejirenwu);//全部更新
        return R.ok();
    }



    

    /**
     * 删除
     */
    @RequestMapping("/delete")
    public R delete(@RequestBody Long[] ids){
        shejirenwuService.deleteBatchIds(Arrays.asList(ids));
        return R.ok();
    }
    
	








}
