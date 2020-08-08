import { Link } from "next/link"
import React from "react"

const DownloadBtns = (props) => (
  <>
                        <div class={`d-flex flex-row ${props.footer && 'justify-content-center'} store-btns flex-wrap`}>
                            <div class={`store-btn ${props.inverse && 'store-btn-inverse'}`}>
                                <a href="https://play.google.com/store/apps/details?id=com.hoplist" target="_blank">
                                    <div class="row">
                                        <div class="col-4">
                                            <div class="icon play-store-icon" style={{backgroundImage: "url('/static/images/play.png')"}}></div>
                                        </div>
                                        <div class="col-8">
                                            <span>Get app on<br/><strong>Google Play</strong></span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class={`store-btn ${props.inverse && 'store-btn-inverse'}`}>
                                <a href="#" target="_blank">
                                    <div class="row">
                                        <div class="col-4">
                                            <div class="icon apple-store-icon" style={{backgroundImage: "url('/static/images/apple.png')"}}></div>
                                        </div>
                                        <div class="col-8">
                                            <span>Get app on<br/><strong>Apple Store</strong></span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
  </>
)

export default DownloadBtns
