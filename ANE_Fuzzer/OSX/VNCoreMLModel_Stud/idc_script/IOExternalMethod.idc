// parse IOExternalMethod/IOExternalAsyncMethod structure

#include <idc.idc>

static main()
{
  // http://www.bejson.com/convert/ox2str/
  // https://www.hex-rays.com/products/ida/debugger/scriptable.shtml
  // https://hex-rays.com/products/ida/support/idadoc/index.shtml
  // https://hex-rays.com/products/ida/support/idadoc/157.shtml
  // https://www.hex-rays.com/products/ida/support/idadoc/162.shtml
  // https://hex-rays.com/wp-content/static/products/ida/support/idapython_docs/idc.html
  // https://hex-rays.com/wp-content/static/products/ida/support/idapython_docs/ida_allins.html#ida_allins.ARM_mov


  auto ea, cref_ea;
  auto object, func, flags, count0, count1;
  auto selector = 0;
  auto mangle_name;

  ea = ask_addr(0x77CB0, "start parsing from addr of: ");
  selector = ask_long(0, "selector starts from: ");
  msg( "start parsing struct of IOExternalMethod/IOExternalAsyncMethod from addr: 0x%X, selector is set to %d.\n", ea, selector );


/*
struct IOExternalMethod {
	IOService *         object;
	IOMethod            func;
	IOOptionBits        flags;
	IOByteCount         count0;
	IOByteCount         count1;
};

struct IOExternalAsyncMethod {
	IOService *         object;
	IOAsyncMethod       func;
	IOOptionBits        flags;      // UInt32
	IOByteCount         count0;     // UInt64
	IOByteCount         count1;     // UInt64
};
*/

  while(ea != BADADDR)
  {
    // msg("0x%X\n", ea);
    object = dword(ea);
    ea = ea + 8;

    mangle_name = get_func_name(qword(ea));
    // msg("0x%s\n", mangle_name);
    if (mangle_name == 0)
    {
      break;
    }
    func = demangle_name(mangle_name, get_inf_attr(INF_LONG_DN));
    ea = ea + 16;

    flags = dword(ea);
    ea = ea + 8;
    count0 = dword(ea);
    ea = ea + 8;
    count1 = dword(ea);
    ea = ea + 8;

    msg( "|%d|0x%X|%s|0x%X|0x%X|0x%X|\n", selector, object, func, flags, count0, count1);

    cref_ea = get_first_fcref_from(ea + 8);
    if (cref_ea != BADADDR)
    {
      break;
    }
    selector = selector + 1;
  }

  msg( "Task finished.\n" );
}