import '../static/css/adminH.css'
import '../static/css/statistical.css'
import statistical from '../static/js/statistical'

import productImage from '../static/images/image-product-sale/iphone-12-green.webp'

import React, { useState, useEffect } from 'react';

function Statistical(){
  useEffect(() => {
    statistical();
  }, [])
  return (
    <div>
        <div className="main__body row">
          <div className="main__body-left col-lg-6 col-md-6 col-sm-12">
            <div className="body__left-statistical">
              <div className="row">
                <div className="left__statistical-min col-lg-4 col-md-4 col-sm-12">
                  <div className="statistical__min-circle">

                  </div>
                  <div className="statistical__min-revenue">
                    132.259.000đ
                  </div>
                  <div className="statistical__min-text">
                    Min
                  </div>
                  <div className="statistical__min-month">
                    Tháng 12
                  </div>
                </div>
                <div className="left__statistical-revenue col-lg-4 col-md-4 col-sm-12">
                  <select name="" id="" className="statistical__revenue-year">
                    <option value="">Năm 2019</option>
                    <option value="">Năm 2020</option>
                    <option value="">Năm 2021</option>
                    <option value="">Năm 2022</option>
                    <option value="">Năm 2023</option>
                  </select>
                  <div className="statistical__revenue-text--year">
                    <i className="fa-solid fa-piggy-bank fa-shake"></i>
                    <div>Tổng doanh thu trong năm</div>
                    <div className="statistical__revenue-textYear--money">
                      987.546.575đ
                    </div>
                  </div>
                  <div className="statistical__revenue-text--month">
                    <span>Tổng doanh thu trong tháng</span>
                    <select name="" id="" className="statistical__revenue-month">
                      <option value="">T1</option>
                      <option value="">T2</option>
                      <option value="">T3</option>
                      <option value="">T4</option>
                      <option value="">T5</option>
                      <option value="">T6</option>
                      <option value="">T7</option>
                      <option value="">T8</option>
                      <option value="">T9</option>
                      <option value="">T10</option>
                      <option value="">T11</option>
                      <option value="">T12</option>
                    </select>
                    <div className="statistical__revenue-textMonth--money">
                      111.546.575đ
                    </div>
                  </div>
                  <div className="statistical__revenue-text--date">
                    <span>Tổng doanh thu trong ngày</span>
                    <input type="date" />
                    <div className="statistical__revenue-textDate--money">
                      23.943.438đ
                    </div>
                  </div>
                </div>
                <div className="left__statistical-max col-lg-4 col-md-4 col-sm-12">
                  <div className="statistical__max-circle">

                  </div>
                  <div className="statistical__max-revenue">
                    999.259.000đ
                  </div>
                  <div className="statistical__max-text">
                    Max
                  </div>
                  <div className="statistical__max-month">
                    Tháng 8
                  </div>
                </div>
              </div>
            </div>

            <div className="body__left-tableOrder-wrap">
              <table className="body__left-tableOrder">
                <tbody>
                <tr className="left__tableOrder">
                  <th>Mã đơn</th>
                  <th>Ngày</th>
                  <th>Trạng thái</th>
                </tr>
                <tr className="left__tableOrder-item">
                  <td>DON1</td>
                  <td>15/12/2012</td>
                  <td>Doing</td>
                </tr>
                <tr className="left__tableOrder-item">
                  <td>DON2</td>
                  <td>15/04/2012</td>
                  <td>Setup</td>
                </tr>
                <tr className="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableOrder-item">
                  <td>DON6</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableOrder-item">
                  <td>DON6</td>
                  <td>15/12/2012</td>
                  <td>Doing</td>
                </tr>
                <tr className="left__tableOrder-item">
                  <td>DON2</td>
                  <td>15/04/2012</td>
                  <td>Setup</td>
                </tr>
                <tr className="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableOrder-item">
                  <td>DON8</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>

                <tr className="left__tableOrder-item">
                  <td>DON1</td>
                  <td>15/12/2012</td>
                  <td>Doing</td>
                </tr>
                <tr className="left__tableOrder-item">
                  <td>DON88</td>
                  <td>15/04/2012</td>
                  <td>Setup</td>
                </tr>
                <tr className="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>

                <tr className="left__tableOrder-item">
                  <td>DON1</td>
                  <td>15/12/2012</td>
                  <td>Doing</td>
                </tr>
                <tr className="left__tableOrder-item">
                  <td>DON2</td>
                  <td>15/04/2012</td>
                  <td>Setup</td>
                </tr>
                <tr className="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableOrder-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                </tbody>
                
              </table>
              <ul className="body__left-tableOrder--listPage">
              </ul>
            </div>

            <div className="body__left-tableProduct-wrap">
              <table className="body__left-tableProduct">
                <tbody>
                <tr className="left__tableProduct">
                  <th>Top S.Phẩm bán chạy</th>
                  <th>Top S.Phẩm bán ít</th>
                  <th>Top K.hàng</th>
                </tr>
                <tr className="left__tableProduct-item">
                  <td>P</td>
                  <td>15/12/2012</td>
                  <td>Doing</td>
                </tr>
                <tr className="left__tableProduct-item">
                  <td>DON2</td>
                  <td>15/04/2012</td>
                  <td>Setup</td>
                </tr>
                <tr className="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableProduct-item">
                  <td>DON6</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableProduct-item">
                  <td>DON6</td>
                  <td>15/12/2012</td>
                  <td>Doing</td>
                </tr>
                <tr className="left__tableProduct-item">
                  <td>DON2</td>
                  <td>15/04/2012</td>
                  <td>Setup</td>
                </tr>
                <tr className="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableProduct-item">
                  <td>DON8</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>

                <tr className="left__tableProduct-item">
                  <td>DON1</td>
                  <td>15/12/2012</td>
                  <td>Doing</td>
                </tr>
                <tr className="left__tableProduct-item">
                  <td>DON88</td>
                  <td>15/04/2012</td>
                  <td>Setup</td>
                </tr>
                <tr className="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>

                <tr className="left__tableProduct-item">
                  <td>DON1</td>
                  <td>15/12/2012</td>
                  <td>Doing</td>
                </tr>
                <tr className="left__tableProduct-item">
                  <td>DON2</td>
                  <td>15/04/2012</td>
                  <td>Setup</td>
                </tr>
                <tr className="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                <tr className="left__tableProduct-item">
                  <td>DON3</td>
                  <td>15/06/2012</td>
                  <td>Done</td>
                </tr>
                </tbody>
                
              </table>
              <ul className="body__left-tableProduct--listPage">

              </ul>
            </div>
          </div>

          <div className="main__body-right col-lg-6 col-md-6 col-sm-12">

            <div className="body__right-order">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-8 row">
                  <div className="col-lg-3 col-md-3 col-sm-6"><div>152 đơn</div></div>
                  <div className="col-lg-3 col-md-3 col-sm-6"><div>152 đơn</div></div>
                  <div className="col-lg-3 col-md-3 col-sm-6"><div>152 đơn</div></div>
                  <div className="col-lg-3 col-md-3 col-sm-6"><div>152 đơn</div></div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div>Đơn trong ngày</div>
                  <input type="date" />
                  <ul className="right__order-state">
                    <li><i className="fa-solid fa-circle"></i>Đang giao</li>
                    <li><i className="fa-solid fa-circle"></i>Chuẩn bị hàng</li>
                    <li><i className="fa-solid fa-circle"></i>Đã giao</li>
                    <li><i className="fa-solid fa-circle"></i>Đơn hủy</li>
                  </ul>
                </div>

              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="right__order-title">Tra cứu mã đơn</div>
                  <div className="right__order-search">
                    <input type="text" className="right__order-search--ipt" placeholder="Nhập mã đơn hàng..." />
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </div>
                </div>
              </div>
              <div className="row right__order-control row">
                <div className="col-lg-5 col-md-5 col-sm-5">
                  <div className="row right__order-searchID">
                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8">
                      <div>Trạng thái<i className="fa-solid fa-circle"></i></div>
                      <div>Mã: <span>VD1</span></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-7 col-sm-7 row">
                  <div className="col-lg-3 col-md-3 col-sm-6"><div className="right__order-item--done"></div></div>
                  <div className="col-lg-3 col-md-3 col-sm-6"><div className="right__order-item--setup"><i className="fa-solid fa-circle-check"></i></div></div>
                  <div className="col-lg-3 col-md-3 col-sm-6"><div className="right__order-item--doing"></div></div>
                  <div className="col-lg-3 col-md-3 col-sm-6"><div className="right__order-item--cancel"></div></div>
                </div>
              </div>
            </div>

            <div className="body__right-orderDetail">


              <div className="right__orderDetail-header">
                Chi tiết đơn hàng <i className="fa-solid fa-money-bill fa-spin"></i>
              </div>


              <div className="right__orderDetail-body">
                <div>Mã: VD1</div>
                <div>ID khách hàng: US1</div>
                <div>Trạng thái: Đã giao</div>
                <div>Ngày: 15/12/2012</div>
                <div>Giá tiền: 4.923.254đ</div>
              </div>


              <div className="right__orderDetail-footer row">
                <div className="orderDetail__item col-lg-3 col-md-3 col-sm-6">
                  <div className="orderDetail__item-img"
                    style={{
                      backgroundImage: `url(${productImage})`,
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'contain'
                    }}></div>
                  <div className="orderDetail__item-quantity">x<span>2</span></div>
                  <div className="orderDetail__item-price">2.265.542đ</div>
                  <div className="orderDetail__item-id">ID: <span>SP1</span></div>
                </div>
                <div className="orderDetail__item col-lg-3 col-md-3 col-sm-6">
                  <div className="orderDetail__item-img"
                    style={{
                      backgroundImage: `url(${productImage})`,
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'contain'
                    }}></div>
                  <div className="orderDetail__item-quantity">x<span>2</span></div>
                  <div className="orderDetail__item-price">2.265.542đ</div>
                  <div className="orderDetail__item-id">ID: <span>SP1</span></div>
                </div>
                <div className="orderDetail__item col-lg-3 col-md-3 col-sm-6">
                  <div className="orderDetail__item-img"
                    style={{
                      backgroundImage: `url(${productImage})`,
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'contain'
                    }}></div>
                  <div className="orderDetail__item-quantity">x<span>2</span></div>
                  <div className="orderDetail__item-price">2.265.542đ</div>
                  <div className="orderDetail__item-id">ID: <span>SP1</span></div>
                </div>
                <div className="orderDetail__item col-lg-3 col-md-3 col-sm-6">
                  <div className="orderDetail__item-img"
                    style={{
                      backgroundImage: `url(${productImage})`,
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'contain'
                    }}></div>
                  <div className="orderDetail__item-quantity">x<span>2</span></div>
                  <div className="orderDetail__item-price">2.265.542đ</div>
                  <div className="orderDetail__item-id">ID: <span>SP1</span></div>
                </div>
                <div className="orderDetail__item col-lg-3 col-md-3 col-sm-6">
                  <div className="orderDetail__item-img"
                    style={{
                      backgroundImage: `url(${productImage})`,
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'contain'
                    }}></div>
                  <div className="orderDetail__item-quantity">x<span>2</span></div>
                  <div className="orderDetail__item-price">2.265.542đ</div>
                  <div className="orderDetail__item-id">ID: <span>SP1</span></div>
                </div>
                <div className="orderDetail__item col-lg-3 col-md-3 col-sm-6">
                  <div className="orderDetail__item-img"
                    style={{
                      backgroundImage: `url(${productImage})`,
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'contain'
                    }}></div>
                  <div className="orderDetail__item-quantity">x<span>2</span></div>
                  <div className="orderDetail__item-price">2.265.542đ</div>
                  <div className="orderDetail__item-id">ID: <span>SP1</span></div>
                </div>
                <div className="orderDetail__item col-lg-3 col-md-3 col-sm-6">
                  <div className="orderDetail__item-img"
                    style={{
                      backgroundImage: `url(${productImage})`,
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'contain'
                    }}></div>
                  <div className="orderDetail__item-quantity">x<span>2</span></div>
                  <div className="orderDetail__item-price">2.265.542đ</div>
                  <div className="orderDetail__item-id">ID: <span>SP1</span></div>
                </div>
                <div className="orderDetail__item col-lg-3 col-md-3 col-sm-6">
                  <div className="orderDetail__item-img"
                    style={{
                      backgroundImage: `url(${productImage})`,
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'contain'
                    }}></div>
                  <div className="orderDetail__item-quantity">x<span>2</span></div>
                  <div className="orderDetail__item-price">2.265.542đ</div>
                  <div className="orderDetail__item-id">ID: <span>SP1</span></div>
                </div>
                <div className="orderDetail__item col-lg-3 col-md-3 col-sm-6">
                  <div className="orderDetail__item-img"
                    style={{
                      backgroundImage: `url(${productImage})`,
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'contain'
                    }}></div>
                  <div className="orderDetail__item-quantity">x<span>2</span></div>
                  <div className="orderDetail__item-price">2.265.542đ</div>
                  <div className="orderDetail__item-id">ID: <span>SP1</span></div>
                </div>


              </div>

            </div>

          </div>
        </div>
    </div>
  )
}
export default Statistical