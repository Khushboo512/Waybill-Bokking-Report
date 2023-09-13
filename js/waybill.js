$(function() {
    $(".chosen").chosen();

    $("#from_date").datepicker({
        autoclose: true,
        format: 'dd-M-yy',
    }).datepicker("setDate", 'now').on('changeDate', function(selected) {
        var minDate = new Date(selected.date.valueOf());
        $('#to_date').datepicker('setStartDate', minDate);
    });

    $("#to_date").datepicker({
        autoclose: true,
        format: 'dd-M-yy',
    }).datepicker("setDate", 'now').on('changeDate', function(selected) {
        var maxDate = new Date(selected.date.valueOf());
        $('#from_date').datepicker('setEndDate', maxDate);
    });

    let val = $('#report_options option:selected').val();

    if (val == "Conductor") {
        console.log(val)
        $("#select_conductor").prop("disabled", false).trigger("chosen:updated");
    }
    $("#report_options").change(function() {
        let val = $('#report_options option:selected').val();

        if (val == "Conductor") {
            $("#select_conductor").prop("disabled", false).trigger("chosen:updated");
            $("#select_bus_no").prop("disabled", true).trigger("chosen:updated");
        } else if (val == "Bus") {
            $("#select_bus_no").prop("disabled", false).trigger("chosen:updated");
            $("#select_conductor").prop("disabled", true).trigger("chosen:updated");
        }
    })
    $("#generate_btn").click(function() {
        // $(".rotate_icon").css("display", "block")
        $(".Waybill_booking_table").css("display", "block")
        tableWaybillDetails.columns.adjust().draw();
        // $(".rotate_icon").css("display", "none")
    })

    // $(".rotate_icon").click(function() {
    //     location.reload()
    // })

    // *************************Data*********************************88
    let json_data = [{
            "CRSID": "4043",
            "Conductor_Name": "MG1",
            "Trip_Service_Name": "Abohar MG10",
            "date1_no": "22345",
            "date1_bus_no": "",
            "date1_amt": "20,0000",
            "date2_no": "22333",
            "date2_amt": "20,0000",
            "date3_no": "2212",
            "date3_amt": "20,0000",
            "date4_no": "22789",
            "date4_amt": "20,0000",
            "date5_no": "23457",
            "date5_amt": "20,0000",
            "date6_no": "22345",
            "date6_amt": "20,0000",
            "date7_no": "22345",
            "date7_amt": "20,0000",
            "date8_no": "22345",
            "date8_amt": "20,0000",
            "Total": "10,000,00,00"
        },
        {
            "CRSID": "2",
            "Conductor_Name": "01",
            "Trip_Service_Name": "1002",
            "date1_no": "22345",
            "date1_bus_no": "PB07BG4583",
            "date1_amt": "20,0000",
            "date2_no": "22345",
            "date2_amt": "20,0000",
            "date3_no": "22345",
            "date3_amt": "20,0000",
            "date4_no": "22345",
            "date4_amt": "20,0000",
            "date5_no": "22345",
            "date5_amt": "20,0000",
            "date6_no": "22345",
            "date6_amt": "20,0000",
            "date7_no": "22345",
            "date7_amt": "20,0000",
            "date8_no": "22345",
            "date8_amt": "20,0000",
            "Total": "2,0000"
        },
        {
            "CRSID": "2",
            "Conductor_Name": "01",
            "Trip_Service_Name": "1002",
            "date1_no": "22345",
            "date1_bus_no": "PB07BG4583",
            "date1_amt": "20,0000",
            "date2_no": "22345",
            "date2_amt": "20,0000",
            "date3_no": "22345",
            "date3_amt": "20,0000",
            "date4_no": "22345",
            "date4_amt": "20,0000",
            "date5_no": "22345",
            "date5_amt": "20,0000",
            "date6_no": "22345",
            "date6_amt": "20,0000",
            "date7_no": "22345",
            "date7_amt": "20,0000",
            "date8_no": "22345",
            "date8_amt": "20,0000",
            "Total": "2,0000"
        },
        {
            "CRSID": "2",
            "Conductor_Name": "01",
            "Trip_Service_Name": "1002",
            "date1_no": "22345",
            "date1_bus_no": "PB07BG4583",
            "date1_amt": "20,0000",
            "date2_no": "22345",
            "date2_amt": "20,0000",
            "date3_no": "22345",
            "date3_amt": "20,0000",
            "date4_no": "22345",
            "date4_amt": "20,0000",
            "date5_no": "22345",
            "date5_amt": "20,0000",
            "date6_no": "22345",
            "date6_amt": "20,0000",
            "date7_no": "22345",
            "date7_amt": "20,0000",
            "date8_no": "22345",
            "date8_amt": "20,0000",
            "Total": "2,0000"
        },
        {
            "CRSID": "2",
            "Conductor_Name": "01",
            "Trip_Service_Name": "1002",
            "date1_no": "22345",
            "date1_bus_no": "PB07BG4583",
            "date1_amt": "20,0000",
            "date2_no": "22345",
            "date2_amt": "20,0000",
            "date3_no": "22345",
            "date3_amt": "20,0000",
            "date4_no": "22345",
            "date4_amt": "20,0000",
            "date5_no": "22345",
            "date5_amt": "20,0000",
            "date6_no": "22345",
            "date6_amt": "20,0000",
            "date7_no": "22345",
            "date7_amt": "20,0000",
            "date8_no": "22345",
            "date8_amt": "20,0000",
            "Total": "2,0000"
        },
        {
            "CRSID": "2",
            "Conductor_Name": "01",
            "Trip_Service_Name": "1002",
            "date1_no": "22345",
            "date1_bus_no": "PB07BG4583",
            "date1_amt": "20,0000",
            "date2_no": "22345",
            "date2_amt": "20,0000",
            "date3_no": "22345",
            "date3_amt": "20,0000",
            "date4_no": "22345",
            "date4_amt": "20,0000",
            "date5_no": "22345",
            "date5_amt": "20,0000",
            "date6_no": "22345",
            "date6_amt": "20,0000",
            "date7_no": "22345",
            "date7_amt": "20,0000",
            "date8_no": "22345",
            "date8_amt": "20,0000",
            "Total": "2,0000"
        },

    ]
    let json_data1 = [{
        "Route": "Chandigarh-Pathankot",
        "Service_Name": "M26 Chandigarh-Pathankot-2x2(49)U AC Seater",
        "Trip_Chart_Date": "30-Aug-23",
        "Trip_Start_Date": "Wed,13:10, 05-Nov-2023",
        "Trip_End_Date": "Wed,19:30, 05-Nov-2023",
    }]
    let json_data2 = [{
            "Booking_Type": "Online Booking",
            "Amount": "5,000",

        },
        {
            "Booking_Type": "Advance Booking",
            "Amount": "9,000",

        },
        {
            "Booking_Type": "Conductor Booking",
            "Amount": "5000",

        }
    ]

    // ***********************waybill data table**************************8
    let tableWaybillDetails = $('#BusWiseReport').DataTable({
        data: json_data,
        dom: 'Btflip',
        fixedHeader: true,
        fixedColumns: {
            left: 3,
            right: 1
        },

        buttons: [{
                extend: 'excelHtml5',
                text: 'Export As Excel',
            },
            {
                extend: 'pdfHtml5',
                text: 'Export As pdf',
                orientation: 'landscape',
                pageSize: 'TABLOID',
                footer: true,
            },
            {
                extend: 'print',
                text: 'Print',
            }
        ],
        columns: [{
                data: 'CRSID'
            },
            {
                data: 'Conductor_Name'
            },
            {
                data: 'Trip_Service_Name'
            },
            {
                data: 'date1_no',
                render: function(data, type, row, meta) {
                    var date8_html = '<div><div class="waybill_no_img"><div class="waybill_no">' + data + '</div><div class="info-img"></div></div>'
                    if (row["date1_bus_no"] != "") {
                        date8_html += '<div class="date_bus_no">' + row["date1_bus_no"] + '</div>';
                    }
                    date8_html += '</div>';
                    return date8_html;

                }
            },
            {
                data: 'date1_amt',
                render: function(data, type, row, meta) {
                    return '<div class="waybill_amt">' + data + '</div>';
                }
            },
            {
                data: 'date2_no',
                render: function(data, type, row, meta) {
                    var date8_html = '<div><div class="waybill_no_img"><div class="waybill_no">' + data + '</div><div class="info-img"></div></div>'
                    if (row["date1_bus_no"] != "") {
                        date8_html += '<div class="date_bus_no">' + row["date1_bus_no"] + '</div>';
                    }
                    date8_html += '</div>';
                    return date8_html;

                }
            },
            {
                data: 'date2_amt',
                render: function(data, type, row, meta) {
                    return '<div class="waybill_amt">' + data + '</div>';
                }
            },
            {
                data: 'date3_no',
                render: function(data, type, row, meta) {
                    var date8_html = '<div><div class="waybill_no_img"><div class="waybill_no">' + data + '</div><div class="info-img"></div></div>'
                    if (row["date1_bus_no"] != "") {
                        date8_html += '<div class="date_bus_no">' + row["date1_bus_no"] + '</div>';
                    }
                    date8_html += '</div>';
                    return date8_html;

                }
            },
            {
                data: 'date3_amt',
                render: function(data, type, row, meta) {
                    return '<div class="waybill_amt">' + data + '</div>';
                }
            },
            {
                data: 'date4_no',
                render: function(data, type, row, meta) {
                    return '<div class="waybill_no_img"><div class="waybill_no">' + data + '</div><div class="info-img"></div></div>';
                }
            },
            {
                data: 'date4_amt',
                render: function(data, type, row, meta) {
                    return '<div class="waybill_amt">' + data + '</div>';
                }
            },
            {
                data: 'date5_no',
                render: function(data, type, row, meta) {
                    return '<div class="waybill_no_img"><div class="waybill_no">' + data + '</div><div class="info-img"></div></div>';
                }
            },
            {
                data: 'date5_amt',
                render: function(data, type, row, meta) {
                    return '<div class="waybill_amt">' + data + '</div>';
                }
            },
            {
                data: 'date6_no',
                render: function(data, type, row, meta) {
                    return '<div class="waybill_no_img"><div class="waybill_no">' + data + '</div><div class="info-img"></div></div>';
                }
            },
            {
                data: 'date6_amt',
                render: function(data, type, row, meta) {
                    return '<div class="waybill_amt">' + data + '</div>';
                }
            },
            {
                data: 'date7_no',
                render: function(data, type, row, meta) {
                    return '<div class="waybill_no_img"><div class="waybill_no">' + data + '</div><div class="info-img"></div></div>';
                }
            },
            {
                data: 'date7_amt',
                render: function(data, type, row, meta) {
                    return '<div class="waybill_amt">' + data + '</div>';
                }
            },
            {
                data: 'date8_no',
            },
            {
                data: 'date8_amt',
                render: function(data, type, row, meta) {
                    return '<div class="waybill_amt">' + data + '</div>';
                }
            },
            {
                data: 'Total'
            }
        ],
        stripeClasses: [],
        ordering: false,
        paging: true,
        scrollY: '55vh',
        scrollX: true,
        searching: false,
        pagingType: "full",
        pageLength: 10,
        scrollCollapse: true,
        scroller: true,

        language: {
            info: "<span class='table_info'> _START_ - _END_ of _TOTAL_</span>",
            infoEmpty: "<span class='table_infoEmpty'> No result found </span>",
            sLengthMenu: "Rows per page _MENU_",
            paginate: {
                first: '<span class="first_page_icon"></span>',
                previous: '<span class="prev_page_icon"></span>',
                next: '<span class="next_page_icon"></span>',
                last: '<span class="last_page_icon"></span>',
            },
        },

    });
    // *************************on click td popup***************************

    $('#BusWiseReport tbody').on('click', 'td', function() {
        // let row = tableWaybillDetails.row($(this).parents('tr')).data();
        // console.log(row);
        if ($(this).html().indexOf('waybill_no') > -1) {
            var data = tableWaybillDetails.cell(this).data();
            $("#trip_details").modal('show');
            $(".waybill-text").text(data);
            $(".waybill_trip_details").css("display", "block")
            let tableWaybillDetails = $('#waybill_trip_details').DataTable({
                data: json_data1,
                columns: [{
                        data: 'Route',
                        render: function(data, type, row, meta) {

                            return type === 'display' && data.length > 30 ?
                                '<span style="text-decoration: underline;" title="' + data + '">' + data.substr(0, 14) + '...</span>' :
                                data;

                        }
                    },
                    {
                        data: 'Service_Name',
                        render: function(data, type, row, meta) {

                            return type === 'display' && data.length > 50 ?
                                '<span style="text-decoration: underline;" title="' + data + '">' + data.substr(0, 14) + '...</span>' :
                                data;

                        }
                    },
                    {
                        data: 'Trip_Chart_Date',
                        render: function(data, type, row, meta) {

                            return type === 'display' && data.length > 30 ?
                                '<span style="text-decoration: underline;" title="' + data + '">' + data.substr(0, 14) + '...</span>' :
                                data;

                        }
                    },
                    {
                        data: 'Trip_Start_Date',
                        render: function(data, type, row, meta) {

                            return type === 'display' && data.length > 30 ?
                                '<span style="text-decoration: underline;" title="' + data + '">' + data.substr(0, 14) + '...</span>' :
                                data;

                        }

                    },
                    {
                        data: 'Trip_End_Date',
                        render: function(data, type, row, meta) {

                            return type === 'display' && data.length > 30 ?
                                '<span style="text-decoration: underline;" title="' + data + '">' + data.substr(0, 14) + '...</span>' :
                                data;

                        }
                    }
                ],
                retrieve: true,
                stripeClasses: [],
                ordering: false,
                paging: false,
                scrollY: '55vh',
                scrollX: true,
                searching: false,
                scrollCollapse: true,
                info: false,
            });
        } else {
            var data = tableWaybillDetails.cell(this).data();
            $("#amount_details").modal('show');
            $(".amount-text").text(data);
            $(".amount_breakdown_details").css("display", "block")
            let tableAmountBreakdownDetails = $('#amount_breakdown_details').DataTable({
                data: json_data2,
                columns: [{
                        data: 'Booking_Type',
                        render: function(data, type, row, meta) {

                            return type === 'display' && data.length > 30 ?
                                '<span style="text-decoration: underline;" title="' + data + '">' + data.substr(0, 14) + '...</span>' :
                                data;

                        }
                    },
                    {
                        data: 'Amount',
                        render: function(data, type, row, meta) {

                            return type === 'display' && data.length > 50 ?
                                '<span style="text-decoration: underline;" title="' + data + '">' + data.substr(0, 14) + '...</span>' :
                                data;

                        }
                    },
                ],
                columnDefs: [
                    { "width": "50%", "targets": 0 },
                    { "className": 'dt-body-right', "width": "50%", "targets": 1 },
                ],
                retrieve: true,
                stripeClasses: [],
                ordering: false,
                paging: false,
                searching: false,
                scrollCollapse: true,
                info: false,
                autoWidth: true,
                "footerCallback": function(row, data, start, end, display) {
                    var api = this.api(),
                        data;

                    // Remove the formatting to get integer data for summation
                    var intVal = function(i) {
                        return typeof i === 'string' ?
                            i.replace(/[\$,]/g, '') * 1 :
                            typeof i === 'number' ?
                            i : 0;
                    };

                    // Total over all pages
                    total = api
                        .column(1)
                        .data()
                        .reduce(function(a, b) {
                            return intVal(a) + intVal(b);
                        }, 0);

                    // Update footer
                    $(api.column(1).footer()).html(
                        total.toLocaleString()
                    );
                }


            });
        }

    })
})


// **************navbar dropdown**********************
function myFunction() {
    $("#myDropdown").toggleClass("show");
}

window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        var myDropdown = $("#myDropdown");
        if (myDropdown.hasClass('show')) {
            myDropdown.removeClass('show');
        }
    }
}