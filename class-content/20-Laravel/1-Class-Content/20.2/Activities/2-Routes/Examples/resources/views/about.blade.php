@extends('layout')

@section('title')
About Me
@stop

@section('content')
	<div class="title">
	    <div class="title">{{ $site_title }}</div>
	</div>
	<div class="table">
		<div class="col-lg-1">{{  $firstName }}</div>
	    <div class="col-lg-1">{{  $lastName }}</div>
	    <div class="col-lg-1">{{  $lastName }}</div>
	    <div class="col-lg-1">{{ $email }}</div>
	</div>
@stop
